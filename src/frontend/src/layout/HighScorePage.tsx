import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Box, Button, IconButton } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useNavigate } from 'react-router-dom';
import { highScoreApi } from '../apis/HighScoresApi';

const HighScorePage = () => {

  const [rows, setRows] = useState<GridRowsProp[]>([]);
  const navigate = useNavigate()
  const username = sessionStorage.getItem('username')

  const getHighscores = () => {
    highScoreApi()
      .then(async (highscoreData) => {
        const highscores = JSON.stringify(highscoreData)
        const parsedHighScores = JSON.parse(highscores || '[]');
        const formattedHighscores = parsedHighScores.map((item: any, index: number) => ({
          id: index + 1, // Provide a unique ID for each row
          highscore: item[0],
          username: item[1],
        }));
        formattedHighscores.sort((a: any, b: any) => b.highscore - a.highscore);
        setRows(formattedHighscores)
      })
  };

  const handleNavigation = () => {
    navigate(`/u/${username}`);
  };

  useEffect(() => {
    // Load high scores from sessionStorage when the component mounts
    getHighscores()
  }, []); // Empty dependency array ensures this effect runs only once on mount



  const columns: GridColDef[] = [
    {
      field: 'username',
      headerName: 'Username',
      width: 200,
      hideable: false,
      disableColumnMenu: true,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: 'highscore',
      headerName: 'Highscore',
      width: 200,
      hideable: false,
      disableColumnMenu: true,
      renderCell: (params) => <span>{params.value}</span>,
    },
  ];

  return (
    <Box className="MuiBox-Center" display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ mt: "200px" }}>
      <div style={{ position: "relative" }}>
        <IconButton color="primary" onClick={getHighscores} aria-label="Refresh" style={{ position: "absolute", top: 6, right: 6, zIndex: 1 }}>
          <RefreshIcon />
        </IconButton>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          pageSizeOptions={[5, 10, 20]}
          isRowSelectable={() => false}
          getRowId={(row: any) => row.id}
          autoHeight
          sx={{ backgroundColor: 'white', opacity: 0.7 }}
        />
      </div>
      <Button variant="contained" onClick={handleNavigation} sx={{ fontFamily: 'QuinqueFive', fontSize: 10, m: 2 }}>
        Go to Home
      </Button>
    </Box>
  );
};

export default HighScorePage;