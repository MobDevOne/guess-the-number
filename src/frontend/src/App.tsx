import { Box } from '@mui/material';
import { Header } from './layout/Header';
import './App.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Login } from './layout/Login';
import { Register } from './layout/Register';
import { GamePage } from './layout/GamePage';
import { HighScorePage } from './layout/HighScorePage';
import { Home } from './layout/Home';
import { NavBar } from './components/Navbar';
import { useEffect } from 'react';
import { changeBackgroundImage } from './components/ChangeBackground';

function App() {
  
  const location = useLocation()

  useEffect(() => {
  changeBackgroundImage()
}, [location]);

  return (
    <Box>
      <Header />
      <NavBar />
      <Routes>
        <Route path='*' element={<Navigate to="/login" />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path=':username' element={<Home />} />
        <Route path=':username/game' element={<GamePage />} />
        <Route path=':username/high-scores' element={<HighScorePage />} />
      </Routes>
    </Box>
  );
}

export default App;

