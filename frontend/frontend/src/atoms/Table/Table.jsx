import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(date, Yield, work) {
  return { date, Yield, work };
}

const rows = [
  createData('2024-01-29', 1000,'Harvesting'),
  createData('2024-01-30 ', 3000,'Watering'),
  createData('2024-01-31', 1800, 'Harvesting'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>DATE </TableCell>
            <TableCell align="right">YIELD RECEIVED(gms)</TableCell>
            <TableCell align="right">WORKTYPE&nbsp;</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.date}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.yield}</TableCell>
              <TableCell align="right">{row.work}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
