import { Box } from '@mui/material';
import './App.css';
import { Header } from './layout/Header';
import { Login } from './layout/Login';

function App() {
  return (
    <Box className="mainMenu">
      <Header/>
      <Login/>
    </Box>
  );
}

export default App;
