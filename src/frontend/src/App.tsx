import { Box } from '@mui/material';
import { Header } from './layout/Header';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './routes';

function App() {

  return (
    <Box className="mainMenu">
      <Header/>
      <RouterProvider router={routes}/>
    </Box>
  );
}

export default App;
