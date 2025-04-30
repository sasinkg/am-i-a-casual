import { Routes, Route } from 'react-router-dom';
import Daily from './pages/Daily';
import Imposters from './pages/Imposters';

function App({ toggleColorScheme, colorScheme }: { toggleColorScheme: () => void; colorScheme: 'light' | 'dark' }) {
  return (
    <Routes>
      <Route path="/" element={<Daily toggleColorScheme={toggleColorScheme} colorScheme={colorScheme} />} />
      <Route path="/extra" element={<Imposters toggleColorScheme={toggleColorScheme} colorScheme={colorScheme}/>} />
    </Routes>
  );
}

export default App;
