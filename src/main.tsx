import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import App from './App';
import '@mantine/core/styles.css';

const Root = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<'light' | 'dark'>({
    key: 'color-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = () => {
    setColorScheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <MantineProvider defaultColorScheme={colorScheme}>
      <App toggleColorScheme={toggleColorScheme} colorScheme={colorScheme} />
    </MantineProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
