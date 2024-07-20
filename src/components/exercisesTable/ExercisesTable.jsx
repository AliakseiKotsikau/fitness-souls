import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import exerciseStatistics from '../../data/exercises_statistics.json';
import { useTheme } from '@mui/material/styles';


const ExercisesTable = props => {
    const theme = useTheme();

    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} >
            <TableHead>
              <TableRow sx={{ backgroundColor: theme.palette.secondary.main, fontWeight: '10'}}>
                <TableCell>Exercise</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {exerciseStatistics.map((row) => (
                <TableRow
                  key={row.exercise}
                  sx={{backgroundColor: theme.palette.common.black}}
                >
                  <TableCell component="th" scope="row">
                    {row.exercise}
                  </TableCell>
                  <TableCell align="right">{row.total} {row.unit}</TableCell>
                </TableRow>
              ))} */}
            </TableBody>
          </Table>
        </TableContainer>
      )
}

export default ExercisesTable