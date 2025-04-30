// src/pages/SecondPage.tsx
import { Button, Center, Stack, Flex } from '@mantine/core';
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
      </Stack>
    </Center>
  );
};

export default Imposters;
