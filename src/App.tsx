import { useState, useEffect } from 'react';
import { Button, TextInput, Text, Stack, Center, Container, Box, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useWindowSize } from './hooks/useWindowSize';
import { distance } from 'fastest-levenshtein';
import logo from './data/logo.png'
import { TriviaQuestion, allQuestions } from './data/questionBank';
import StatsPopup from './modals/statsPopup';
import RulesPopup from './modals/rulesPopup';

interface AppProps {
  toggleColorScheme: () => void;
  colorScheme: 'light' | 'dark';
}

const sportIcons: Record<string, string> = {
  basketball: "🏀",
  football: "🏈",
  soccer: "⚽",
  baseball: "⚾",
  hockey: "🏒",
  golf: "⛳",
  tennis: "🎾",
  olympics: "🏅",
};

const RULES_VERSION = "2";

const App = ({ toggleColorScheme, colorScheme }: AppProps) => {
  const { width, height } = useWindowSize();
  const [rulesOpened, { open: openRules, close: closeRules }] = useDisclosure(false);
  const [statsOpened, { open: openStats, close: closeStats }] = useDisclosure(false);
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState('');
  const [submittedAnswer, setSubmittedAnswer] = useState('');
  const [showSubmittedAnswer, setShowSubmittedAnswer] = useState(false);
  const [hasAnsweredToday, setHasAnsweredToday] = useState(false);
  const [stats, setStats] = useState({ correct: 0, wrong: 0, perfectWeeks: 0 });
  const [weeklyProgress, setWeeklyProgress] = useState<Record<number, "correct" | "wrong">>({});
  const [guessCount, setGuessCount] = useState(0);
  const [hintsVisible, setHintsVisible] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState<string[]>([]);

  // --- Fake Today Mode for testing ---
  const FAKE_DAY_OVERRIDE: number | null = null; // Set 0-6 to simulate day (0=Sunday, etc.)

  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  const effectiveDay = FAKE_DAY_OVERRIDE !== null ? FAKE_DAY_OVERRIDE : today.getDay();
  const effectiveDayOfYear = FAKE_DAY_OVERRIDE !== null ? 100 : dayOfYear;

  const todayQuestions = allQuestions.filter(q => q.day === effectiveDay);
  const todayQuestion: TriviaQuestion = todayQuestions.length
    ? todayQuestions[effectiveDayOfYear % todayQuestions.length]
    : allQuestions[0]; // fallback to something safe  

  const sportIcon = sportIcons[todayQuestion.sport] || "";
  const isDark = colorScheme === 'dark';

  const handleResetProgress = () => {
    if (confirm("All of your stats will clear out! Are you sure you want to reset all progress? This cannot be undone.")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  const handleCloseRules = () => {
    localStorage.setItem('rules_version', RULES_VERSION);
    closeRules();
  };

  useEffect(() => {
    const storedRulesVersion = localStorage.getItem('rules_version');
    if (storedRulesVersion !== RULES_VERSION) {
      openRules();
    }

    const lastAnswered = localStorage.getItem('answeredDate');
    if (lastAnswered === today.toLocaleDateString()) {
      setHasAnsweredToday(true);
    }

    const savedStats = JSON.parse(localStorage.getItem('stats') || '{"correct":0,"wrong":0,"perfectWeeks":0}');
    const savedWeekly = JSON.parse(localStorage.getItem('weeklyProgress') || '{}');

    if (today.getDay() === 0 && Object.keys(savedWeekly).length > 0) {
      const correctCount = Object.values(savedWeekly).filter(val => val === "correct").length;
      if (correctCount === 7) {
        savedStats.perfectWeeks = (savedStats.perfectWeeks || 0) + 1;
      }
      localStorage.setItem('stats', JSON.stringify(savedStats));
      localStorage.removeItem('weeklyProgress');
      setWeeklyProgress({});
    } else {
      setWeeklyProgress(savedWeekly);
    }

    setStats(savedStats);
  }, []);

  const checkAnswer = () => {
    if (hasAnsweredToday && todayQuestion.type === 'single') return;
    if (answer.trim().toLowerCase() === "") return;
    const userAnswer = answer.trim().toLowerCase();
    setSubmittedAnswer(userAnswer);
    // console.log(todayQuestion.answer);
    if (todayQuestion.type === 'single') {
      const correctAnswers = todayQuestion.answer.map(a => a.toLowerCase());
      console.log();
      const directMatch = correctAnswers.some(ans => userAnswer === ans);
      const partialMatch = correctAnswers.some(ans => ans.includes(userAnswer) || userAnswer.includes(ans));

      if (directMatch || partialMatch) {
        setResult('Correct! 🏆');
        updateStats(true);
        setHasAnsweredToday(true);
      } else {
        const close = correctAnswers.some(ans => distance(userAnswer, ans) <= 2);
        
        if (close) {
          setResult('Close! 🤏');
        } else {
          setResult('Wrong! ❌');
          setGuessCount(prev => prev + 1);
          if (guessCount < 2) {
            setHintsVisible(prev => prev + 1);
          }
          if (guessCount >= 2) {
            updateStats(false);
            setHasAnsweredToday(true);
          }
        }
      }
    } else if (todayQuestion.type === 'list') {
      const correctAnswers = todayQuestion.answer as string[];
      const match = correctAnswers.find(a => a.toLowerCase() === userAnswer);

      if (match && !correctGuesses.includes(match)) {
        setCorrectGuesses(prev => [...prev, match]);
        setAnswer('');
        if (correctGuesses.length + 1 === correctAnswers.length) {
          setResult('Completed! 🏆');
          updateStats(true);
        }
      } else {
        setResult('Keep trying! 💪');
      }
    }
  };

  const updateStats = (isCorrect: boolean) => {
    const updatedStats = { ...stats };
    const updatedWeekly = { ...weeklyProgress };
    const dayIndex = effectiveDay;

    if (isCorrect) {
      updatedStats.correct += 1;
      updatedWeekly[dayIndex] = "correct";
    } else {
      updatedStats.wrong += 1;
      updatedWeekly[dayIndex] = "wrong";
    }

    setStats(updatedStats);
    setWeeklyProgress(updatedWeekly);

    localStorage.setItem('stats', JSON.stringify(updatedStats));
    localStorage.setItem('weeklyProgress', JSON.stringify(updatedWeekly));
    localStorage.setItem('answeredDate', today.toLocaleDateString());
  };

  const isPerfectWeek = () => {
    return Object.values(weeklyProgress).filter(val => val === "correct").length === 7;
  };

  const calculateWeeklyTitle = () => {
    const correctCount = Object.values(weeklyProgress).filter(val => val === "correct").length;
    if (correctCount === 0) return "Dummy";
    if (correctCount <= 3) return "Casual";
    if (correctCount <= 5) return "Enthusiast";
    if (correctCount === 6) return "True Student of the Game";
    return "You know ball";
  };

  return (
    <Center style={{ minHeight: '100vh', backgroundColor: isDark ? '#1a1b1e' : '#f8f9fa', transition: 'background-color 0.3s ease' }}>
      <Container size="xs">

        {/* Rules Modal */}
        <RulesPopup rulesOpened={rulesOpened} handleCloseRules={handleCloseRules}></RulesPopup>

        <Stack gap="md" align="center">
          <Flex gap="xs">
            <Button color="gray" variant="light" onClick={toggleColorScheme}>
              {isDark ? "☀️" : "🌙"}
            </Button>
            <Button color="gray" variant="light" onClick={openStats}>
              📈
            </Button>
          </Flex>
          <img src={logo} alt="Am I a Casual Logo" style={{ width: '150px' }} />          
          {/* <Title order={1} c={isDark ? "white" : "black"}>
            Am I A Casual?
          </Title> */}

          <Text size="sm" c="dimmed">{sportIcon} {today.toLocaleDateString()}</Text>

          {!hasAnsweredToday || todayQuestion.type === 'list' ? (
            <>
              <Text size="lg" c={isDark ? 'white' : 'black'}>{todayQuestion.question}</Text>
              <TextInput
                placeholder="Type your answer..."
                value={answer}
                onChange={(e) => setAnswer(e.currentTarget.value)}
              />
              {todayQuestion.type === 'single' && hintsVisible >= 1 && (
                <Stack>
                  <Text fw={700} ta="center" size="lg" c="red">Try again!</Text>
                  <Text size="sm" c="orange">Hint 1: {todayQuestion.hints[0]}</Text>
                </Stack>
              )}
              {todayQuestion.type === 'single' && hintsVisible >= 2 && (
                <Text size="sm" c="orange">Hint 2: {todayQuestion.hints[1]}</Text>
              )}
              <Button onClick={checkAnswer}>Submit</Button>
              {todayQuestion.type === 'list' && (
                <Stack mt="md" align="center" gap="xs">
                  {(todayQuestion.answer as string[]).map((ans, idx) => (
                    <Box
                      key={idx}
                      w={250}
                      h={60}
                      p="sm"
                      bg={correctGuesses.includes(ans) ? "green" : "gray"}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '8px',
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '16px',
                        textAlign: 'center',
                        transition: 'all 0.3s ease',
                        transform: correctGuesses.includes(ans) ? 'scale(1)' : 'scale(0.95)',
                        opacity: correctGuesses.includes(ans) ? 1 : 0.7,
                      }}
                    >
                      {correctGuesses.includes(ans) ? ans : (idx + 1)}
                    </Box>
                  ))}
                  {correctGuesses.length === (todayQuestion.answer as string[]).length && (
                    <Text size="xl" c="green" fw={700} mt="md">
                      🏆 You got all 7 correct!
                    </Text>
                  )}

                </Stack>

              )}
            </>
          ) : (
            <>
              <Text size="md" c={isDark ? "white" : "black"} fw="700" ta="center">{todayQuestion.question}</Text>
              <Text size="sm" c="green">You already answered today's trivia!</Text>
              <Button
                size="sm"
                color={result.includes('Correct') ? 'green' : result.includes('Casual') || result.includes('Wrong') ? 'red' : 'green'}
                variant="light"
                onClick={() => setShowSubmittedAnswer(true)}
              >
                {showSubmittedAnswer ? todayQuestion.answer[0] : "View Answer"}
              </Button>

              {result && <Text c={isDark ? "white" : "black" } fw={700}>{result}</Text>}
            </>
          )}
        </Stack>

        <StatsPopup
          statsOpened={statsOpened}
          closeStats={closeStats}
          isPerfectWeek={isPerfectWeek}
          submittedAnswer={submittedAnswer}
          weeklyProgress={weeklyProgress}
          stats={stats}
          width={width}
          height={height}
          calculateWeeklyTitle={calculateWeeklyTitle}
        />


        <Center mt="xl">
          <Button variant="subtle" size="xs" color="gray" onClick={handleResetProgress} style={{ fontSize: '10px', opacity: 0.6 }}>
            Reset Progress
          </Button>
        </Center>

      </Container>
    </Center>
  );
};

export default App;
