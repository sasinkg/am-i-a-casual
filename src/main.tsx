import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import App from './App';
import '@mantine/core/styles.css';

const Root = () => {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light');

  const toggleColorScheme = () => {
    setColorScheme(prev => (prev === 'light' ? 'dark' : 'light'));
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
