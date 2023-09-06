import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { useState } from 'react';

const highscoreStorageLoad: () => [] = function () {
  const dataString = localStorage.getItem("highscoresData");
  if (dataString) {
    return JSON.parse(dataString);
  } else {
    return [];
  }
}

const [rows, setRows] = useState<GridRowsProp[]>([])

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
    renderCell: (params => {return <span>{params.value}</span>}) 
  },
  { 
    field: 'highscore', 
    headerName: 'Highscore',
    width: 200, 
    hideable: false, 
    disableColumnMenu: true, 
    renderCell: (params => {return <span>{params.value}</span>}) 
  },
];

const HighscorePage = () => {
  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
      <DataGrid
        rows={rows}
        columns={columns}
        isRowSelectable={() => false}
        getRowId={(row:any) => row.username}
        autoHeight
        sx={{ backgroundColor: 'white', opacity: 0.7, mt: '150px' }}
      />
    </Box>
  );
}

export default HighscorePage;