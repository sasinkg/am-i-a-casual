import { useEffect, useState } from 'react';
import { Group, Stack, Title, Box, Text, Modal } from '@mantine/core';
import Confetti from 'react-confetti';

interface StatsPopupProps {
  statsOpened: boolean;
  closeStats: () => void;
  isPerfectWeek: () => boolean;
  submittedAnswer: string;
  weeklyProgress: Record<number, "correct" | "wrong">;
  stats: { correct: number; wrong: number; perfectWeeks: number };
  width: number;
  height: number;
  calculateWeeklyTitle: () => string;
}

function StatsPopup({
  statsOpened,
  closeStats,
  isPerfectWeek,
  submittedAnswer,
  weeklyProgress,
  stats,
  width,
  height,
  calculateWeeklyTitle
}: StatsPopupProps) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (statsOpened && isPerfectWeek()) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 3000); // 3 seconds
      return () => clearTimeout(timer);
    }
  }, [statsOpened, isPerfectWeek]);

  return (
    <Modal opened={statsOpened} onClose={closeStats} title="Your Stats" centered>
      <Stack gap="sm" align="center">
        {isPerfectWeek() && (
          <Stack gap="sm" align="center">
            <Title order={2} c="yellow">🏀 YOU KNOW BALL 🏀</Title>
            {showConfetti && <Confetti width={width} height={height} />}
          </Stack>
        )}
        <Text>Total Correct: {stats.correct}</Text>
        <Text>Total Wrong: {stats.wrong}</Text>
        <Text>Perfect Weeks: {stats.perfectWeeks || 0}</Text>
        <Text>
          Win %: {stats.correct + stats.wrong > 0
            ? Math.round((stats.correct / (stats.correct + stats.wrong)) * 100)
            : 0
          }%
        </Text>
        {submittedAnswer && (
          <Text size="sm" c="dimmed">Your Answer: {submittedAnswer}</Text>
        )}
        <Group mt="md">
          {["Su", "M", "Tu", "W", "Th", "F", "Sa"].map((day, idx) => {
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
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '4px',
                  color: 'white'
                }}
              >
                {day}
              </Box>
            );
          })}
        </Group>
        <Text fw={700} mt="sm">{calculateWeeklyTitle()}</Text>
      </Stack>
    </Modal>
  );
}

export default StatsPopup;
