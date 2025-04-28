import { useState, useEffect } from 'react';
import { Button, TextInput, Title, Text, Stack, Center, Container, Modal, Group, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Confetti from 'react-confetti';
import { useWindowSize } from './hooks/useWindowSize';
import { questionBank, TriviaQuestion } from './data/questionBank';
import { Flex} from '@mantine/core';
import { levenshtein } from 'fastest-levenshtein'; // ✏️ we'll install a tiny lib for string similarity

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

const App = ({ toggleColorScheme, colorScheme }: AppProps) => {
  const isDark = colorScheme === 'dark';
  const { width, height } = useWindowSize();
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState('');
  const [hasAnsweredToday, setHasAnsweredToday] = useState(false);
  const [statsOpened, { open: openStats, close: closeStats }] = useDisclosure(false);
  const [submittedAnswer, setSubmittedAnswer] = useState('');
  const [showSubmittedAnswer, setShowSubmittedAnswer] = useState(false);
  const [stats, setStats] = useState({ correct: 0, wrong: 0, perfectWeeks: 0 });
  const [weeklyProgress, setWeeklyProgress] = useState<Record<number, "correct" | "wrong">>({});
  const [guessCount, setGuessCount] = useState(0);
  const [hintsVisible, setHintsVisible] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState<string[]>([]);

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  const isSaturday = today.getDay() === 6;

  const todayQuestion: TriviaQuestion = isSaturday
    ? questionBank.find(q => q.type === 'list')!
    : questionBank.filter(q => q.type === 'single')[dayOfYear % questionBank.filter(q => q.type === 'single').length];

  const sportIcon = sportIcons[todayQuestion.sport] || "❓";

  useEffect(() => {
    const lastAnswered = localStorage.getItem('answeredDate');
    if (lastAnswered === formattedDate) {
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
  }, [formattedDate]);

  const checkAnswer = () => {
    if (hasAnsweredToday && todayQuestion.type === 'single') return;
  
    const userAnswer = answer.trim().toLowerCase();
    setSubmittedAnswer(userAnswer); // Always save the typed answer
  
    if (todayQuestion.type === 'single') {
      const correctAnswers = Array.isArray(todayQuestion.answer)
        ? todayQuestion.answer.map(a => a.toLowerCase())
        : [todayQuestion.answer.toLowerCase()];
  
      const directMatch = correctAnswers.some(ans => userAnswer === ans);
      const partialMatch = correctAnswers.some(ans => ans.includes(userAnswer) || userAnswer.includes(ans));
  
      if (directMatch || partialMatch) {
        setResult('Correct! 🏆');
        updateStats(true);
        setHasAnsweredToday(true);
      } else {
        const close = correctAnswers.some(ans => levenshtein(userAnswer, ans) <= 2);
  
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
    }
  
    else if (todayQuestion.type === 'list') {
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
    const dayIndex = today.getDay();

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
    localStorage.setItem('answeredDate', formattedDate);
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
    <Center style={{ 
      minHeight: '100vh', 
      backgroundColor: isDark ? '#1a1b1e' : '#f8f9fa', 
      transition: 'background-color 0.3s ease'
    }}>
      <Container size="xs">
        <Stack gap="md" align="center">
          <Flex gap="xs">
            <Button color="grey"onClick={toggleColorScheme} variant="light">
              {isDark ? "☀️" : "🌙"}
            </Button>
            <Button color="grey"variant="light" onClick={openStats}>📈</Button>
          </Flex>
          <Title order={1} c={isDark ? "white" : "black"}>
            Am I A Casual?
          </Title>
          <Text size="sm" c="dimmed">{sportIcon} {formattedDate}</Text>

          {!hasAnsweredToday || todayQuestion.type === 'list' ? (
            <>
              <Text size="lg">{todayQuestion.question}</Text>
              <TextInput
                placeholder="Type your answer..."
                value={answer}
                onChange={(e) => setAnswer(e.currentTarget.value)}
              />
              <Button onClick={checkAnswer}>Submit</Button>

              {todayQuestion.type === 'single' && hintsVisible >= 1 && (
                <Text size="sm" c="gray">Hint 1: {todayQuestion.hints[0]}</Text>
              )}
              {todayQuestion.type === 'single' && hintsVisible >= 2 && (
                <Text size="sm" c="gray">Hint 2: {todayQuestion.hints[1]}</Text>
              )}

              {todayQuestion.type === 'list' && (
                <Group mt="md">
                  {(todayQuestion.answer as string[]).map((ans, idx) => (
                    <Box
                      key={idx}
                      w={120}
                      h={40}
                      bg={correctGuesses.includes(ans) ? "green" : "gray"}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', color: 'white' }}
                    >
                      {correctGuesses.includes(ans) ? ans : (idx + 1)}
                    </Box>
                  ))}
                </Group>
              )}
            </>
          ) : (
            <>
              <Text size="lg" c="darkgreen">{todayQuestion.question}</Text>
              <Text size="md" c="green">You already answered today's trivia!</Text>

              <Button
                size="sm"
                color={result.includes('Correct') ? 'green' : result.includes('Casual') || result.includes('Wrong') ? 'red' : 'gray'}
                variant="light"
                onClick={() => setShowSubmittedAnswer(true)}
              >
                {showSubmittedAnswer ? submittedAnswer : "View Answer"}
              </Button>

              {result && <Text fw={700}>{result}</Text>}
            </>

          )}
        </Stack>

        {/* Stats Modal */}
        <Modal opened={statsOpened} onClose={closeStats}  title="Your Stats" centered>
          <Stack gap="sm" align="center">
            {isPerfectWeek() && (
              <Stack gap="sm" align="center">
                <Title order={2} c="yellow">🏀 YOU KNOW BALL 🏀</Title>
                <Confetti width={width} height={height} />
              </Stack>
            )}

            <Text>Total Correct: {stats.correct}</Text>
            <Text>Total Wrong: {stats.wrong}</Text>
            <Text>Perfect Weeks: {stats.perfectWeeks || 0}</Text>
            <Text>Win %: {stats.correct + stats.wrong > 0
              ? Math.round((stats.correct / (stats.correct + stats.wrong)) * 100)
              : 0
            }%</Text>
            {submittedAnswer && (
              <Text size="sm" c="dimmed">Your Answer: {submittedAnswer}</Text>
            )}


            <Group mt="md">
              {["Su","M","Tu","W","Th","F","Sa"].map((day, idx) => {
                const status = weeklyProgress[idx];
                let bg = "gray";
                if (status === "correct") bg = "green";
                else if (status === "wrong") bg = "red";

                return (
                  <Box
                    key={idx}
                    w={30}
                    h={30}
                    bg={bg}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', color: 'white' }}
                  >
                    {day}
                  </Box>
                );
              })}
            </Group>

            <Text fw={700} mt="sm">{calculateWeeklyTitle()}</Text>
          </Stack>
        </Modal>
      </Container>
    </Center>
  );
};

export default App;
