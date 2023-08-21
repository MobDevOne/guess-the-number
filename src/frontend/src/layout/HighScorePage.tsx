import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const columns = [
  { field: 'username', headerName: 'Username', width: 200 },
  { field: 'attemps', headerName: 'Attemps', width: 200 },
  { field: 'score', headerName: 'Score', width: 200 },
];

const rows = [
  { id: 1, username: 'Jean', attemps: 1, score: 1000 },
  { id: 2, username: 'Pascal', attemps: 25, score: 250 },
  { id: 3, username: 'Spiro', attemps: 69, score: 'gawd dayum' },
  { id: 4, username: 'Levent', attemps: 420, score: 'too high' },
  // Add more rows as needed
];

export function HighScorePage() {
  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{backgroundColor: 'white', opacity: 0.7, mt: '150px'}}
      />
    </Box>
  );
}