import { Box } from '@mui/material';
import { Header } from './layout/Header';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './layout/Login';
import { Register } from './layout/Register';
import { GamePage } from './layout/GamePage';
import { HighScorePage } from './layout/HighScorePage';
import { Home } from './layout/Home';

function App() {

  return (
    <Box className="mainMenu">
      <Header />
      <Routes>
        <Route path='*' element={<Navigate to="/login" />} />
        <Route path='login' element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path='username' element={<Home/>}>
          <Route path='game' element={<GamePage />} />
          <Route path='high-scores' element={<HighScorePage />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
