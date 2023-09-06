import './App.css';
import { Box } from '@mui/material';
import { Header } from './components/Header';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { NavBar } from './components/Navbar';
import { useEffect } from 'react';
import { changeBackgroundImage } from './components/ChangeBackground';

import LoginPage from './layout/LoginPage';
import RegisterPage from './layout/RegisterPage';
import GamePage from './layout/GamePage';
import HomePage from './layout/HomePage';
import AboutPage from './layout/AboutPage';
import HighscorePage from './layout/HighScorePage';

function App() {

  const location = useLocation()

  useEffect(() => {
    changeBackgroundImage(location.pathname)
  }, [location.pathname]);

  return (
    <Box>
      <Header />
      <NavBar />
      <Routes>
        <Route path='*' element={<Navigate to="/login" />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='u/:username' element={<HomePage />} />
        <Route path='u/:username/game' element={<GamePage />} />
        <Route path='u/:username/highscores' element={<HighscorePage />} />
      </Routes>
    </Box>
  );
}

export default App;

