import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Box, IconButton } from '@mui/material';
import { useState } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';

const HighScorePage = () => {

  const [rows, setRows] = useState<GridRowsProp[]>([])

  const highscoreStorageLoad: () => [] = function () {
    const rawHighscores = localStorage.getItem("highscoresData");
    const parsedHighScores = JSON.parse(rawHighscores!!);
    const formattedHighscores = parsedHighScores.map((item: any, index: number) => ({
      id: index + 1, // Provide a unique ID for each row
      score: item[0],
      name: item[1],
    }));
    setRows(formattedHighscores)
  }

  const getHighscores = function (event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    setRows(highscoreStorageLoad())
  }

  const columns: GridColDef[] = [
    {
      field: 'username',
      headerName: 'Username',
      width: 200,
      hideable: false,
      disableColumnMenu: true,
      renderCell: (params => { return <span>{params.value}</span> })
    },
    {
      field: 'highscore',
      headerName: 'Highscore',
      width: 200,
      hideable: false,
      disableColumnMenu: true,
      renderCell: (params => { return <span>{params.value}</span> })
    },
  ];

  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
      <IconButton
        color="primary"
        onClick={getHighscores}
        aria-label="Refresh"
      >
        <RefreshIcon />
      </IconButton>
      <DataGrid
        rows={rows}
        columns={columns}
        isRowSelectable={() => false}
        getRowId={(row: any) => row.username}
        autoHeight
        sx={{ backgroundColor: 'white', opacity: 0.7, mt: '150px' }}
      />
    </Box>
  );
}

export default HighScorePage;