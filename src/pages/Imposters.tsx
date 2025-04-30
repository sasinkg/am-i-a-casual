import { useEffect, useState } from 'react';
import {
  Button,
  Center,
  Stack,
  Flex,
  Text,
  Image,
  Grid,
  Tooltip,
  Loader,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { dailyData } from '../data/dailyData';

interface ImpostersProps {
  toggleColorScheme: () => void;
  colorScheme: 'light' | 'dark';
}

const today = new Date().toISOString().split('T')[0];

interface PlayerCard {
  id: number;
  name: string;
  src: string;
  isImposter: boolean;
}

const Imposters = ({ toggleColorScheme, colorScheme }: ImpostersProps) => {
  const navigate = useNavigate();
  const isDark = colorScheme === 'dark';

  const [players, setPlayers] = useState<PlayerCard[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [alreadyPlayed, setAlreadyPlayed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lastPlayed = localStorage.getItem('imposters_lastPlayed');
    if (lastPlayed === today) setAlreadyPlayed(true);
  }, []);

  useEffect(() => {
    const fetchImage = async (name: string, source: 'tmdb' | 'sportsdb') => {
      try {
        if (source === 'sportsdb') {
          const res = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${encodeURIComponent(name)}`);
          const data = await res.json();
          return data?.player?.[0]?.strCutout || 'https://via.placeholder.com/140x140?text=?';
        } else if (source === 'tmdb') {
          const tmdbKey = '3'; // You can replace with your real API key
          const res = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${tmdbKey}&query=${encodeURIComponent(name)}`);
          const data = await res.json();
          const profilePath = data?.results?.[0]?.profile_path;
          return profilePath ? `https://image.tmdb.org/t/p/w500${profilePath}` : 'https://via.placeholder.com/140x140?text=?';
        }
      } catch {
        return 'https://via.placeholder.com/140x140?text=?';
      }
    };

    const fetchAllPlayers = async () => {
      const names = [
        ...dailyData.real.map(name => ({ name, isImposter: false })),
        ...dailyData.imposters.map(name => ({ name, isImposter: true })),
      ];

      const results: PlayerCard[] = [];

      for (let i = 0; i < names.length; i++) {
        const { name, isImposter } = names[i];
        const img = await fetchImage(name, dailyData.source as 'tmdb' | 'sportsdb');
        results.push({ id: i, name, src: img, isImposter });
      }

      setPlayers(results);
      setLoading(false);
    };

    fetchAllPlayers();
  }, []);

  const toggleSelect = (id: number) => {
    if (gameOver || alreadyPlayed) return;
    if (selected.includes(id)) {
      setSelected(prev => prev.filter(i => i !== id));
    } else if (selected.length < dailyData.imposters.length) {
      setSelected(prev => [...prev, id]);
    }
  };

  const handleSubmit = () => {
    const correctImposters = players.filter(p => p.isImposter).map(p => p.id);
    const correctCount = selected.filter(id => correctImposters.includes(id)).length;

    localStorage.setItem('imposters_lastPlayed', today);
    setScore(correctCount);
    setGameOver(true);
  };

  return (
    <Center
      style={{
        minHeight: '100vh',
        backgroundColor: isDark ? '#0c181f' : '#ffeeba',
        padding: '2rem',
      }}
    >
      <Stack align="center" gap="xl">
        <Flex gap="xs">
          <Button variant="gradient" onClick={() => navigate('/')}>
            Daily
          </Button>
          <Button color="gray" variant="light" onClick={toggleColorScheme}>
            {isDark ? '☀️' : '🌙'}
          </Button>
        </Flex>

        <Text c={isDark ? 'teal' : 'pink'} fw={1000} size="lg">
          {dailyData.category} — Find the Imposters
        </Text>

        {loading ? (
          <Loader size="lg" />
        ) : (
          <Grid grow gutter="md" style={{ maxWidth: 700 }}>
            {players.map((item) => (
              <Grid.Col span={{ base: 6, md: 2.4 }} key={item.id}>
                <Tooltip label={item.name} withArrow position="top">
                  <div
                    style={{
                      overflow: 'hidden',
                      border: selected.includes(item.id)
                        ? '4px solid limegreen'
                        : 'none',
                      borderRadius: '12px',
                    }}
                  >
                    <Image
                      src={item.src}
                      alt={item.name}
                      height={140}
                      width={140}
                      fit="contain"
                      radius="md"
                      onClick={() => toggleSelect(item.id)}
                      style={{
                        cursor: alreadyPlayed || gameOver ? 'not-allowed' : 'pointer',
                        opacity: alreadyPlayed ? 0.5 : 1,
                      }}
                    />
                  </div>
                </Tooltip>
              </Grid.Col>
            ))}
          </Grid>
        )}

        {alreadyPlayed ? (
          <Text c="gray" fw={600}>
            You already played today. Come back tomorrow!
          </Text>
        ) : gameOver ? (
          <Text fw={700} c={score === dailyData.imposters.length ? 'green' : 'red'}>
            {score}/{dailyData.imposters.length} — {score === dailyData.imposters.length ? 'Perfect! 🎉' : 'Game Over. Try again tomorrow!'}
          </Text>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={selected.length !== dailyData.imposters.length}
            color="indigo"
          >
            Submit
          </Button>
        )}
      </Stack>
    </Center>
  );
};

export default Imposters;
