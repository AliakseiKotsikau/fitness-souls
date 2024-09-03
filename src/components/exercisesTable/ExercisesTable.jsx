import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux'


const ExercisesTable = props => {
  const theme = useTheme();
  const exercisesStatistics = useSelector(state => state.fitnessSouls.exerciseStats);

  function mapExercisesStatisticsToArray(stats) {
    return Object.keys(stats).map(key => ({exercise: key, total: stats[key].quantity, unit: stats[key].unit}));
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} >
        <TableHead>
          <TableRow sx={{ backgroundColor: theme.palette.secondary.main, fontWeight: '10' }}>
            <TableCell>Exercise</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mapExercisesStatisticsToArray(exercisesStatistics).map((row) => (
            <TableRow
              key={row.exercise}
              sx={{ backgroundColor: theme.palette.common.black }}
            >
              <TableCell component="th" scope="row">
                {row.exercise}
              </TableCell>
              <TableCell align="right">{row.total} {row.unit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ExercisesTable