// src/pages/SecondPage.tsx
import { Button, Center, Stack, Flex, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

interface ImpostersProps {
  toggleColorScheme: () => void;
  colorScheme: 'light' | 'dark';
}

const Imposters = ({ toggleColorScheme, colorScheme }: ImpostersProps) => {
  const navigate = useNavigate();
  const isDark = colorScheme === 'dark';

  return (
    <Center style={{ minHeight: '100vh', backgroundColor: isDark ? '#0c181f' : '#ffeeba', transition: 'background-color 0.3s ease' }}>
      <Stack align="center">
          <Flex gap="xs">
            <Button variant = "gradient" onClick={() => navigate('/')}>Daily</Button>
            <Button color="gray" variant="light" onClick={toggleColorScheme}>
              {isDark ? "☀️" : "🌙"}
            </Button>
          </Flex>
          <Text c={isDark ? 'teal' : 'pink'} fw = "1000" size="lg">Page under construction!</Text>
      </Stack>
    </Center>
  );
};

export default Imposters;
