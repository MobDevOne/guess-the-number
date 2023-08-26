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

function changeBackgroundImage() {
  // Get the current URL
  const currentUrl = window.location.href;

  // Check the URL or any pattern you want and set the background image accordingly
  if (currentUrl.includes('game') || currentUrl.includes('high-scores')) {
    document.body.style.background = 'url("/Background Sunset.png")';
  } else if (currentUrl.includes('home')) {
    document.body.style.background = 'url("/Background Evening.png")';
  } else {
    // Default background image if the URL doesn't match any pattern
    document.body.style.background = 'url("/Background Day.png")';
  }

  // Set background properties for best display
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundAttachment = 'fixed';
}

