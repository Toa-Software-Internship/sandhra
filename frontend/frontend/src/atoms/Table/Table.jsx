import * as React from 'react';
import "./Table.css"
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
  createData('2024-01-29', '1000','Harvesting'),
  createData('2024-01-30 ', '3000','Watering'),
  createData('2024-01-31', '1800', 'Harvesting'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}  >
      <Table  aria-label="simple table" >
        <TableHead>
          <TableRow >
            <TableCell className='heading' sx={{color:"rgb(42, 71, 4)" , fontWeight:"bold", fontSize:"30px"} }>DATE </TableCell>
    
            <TableCell className='heading' sx={{color:"rgb(42, 71, 4)" , fontWeight:"bold", fontSize:"30px"} }>YIELD RECEIVED(gms)</TableCell>
            <TableCell className='heading'sx={{color:"rgb(42, 71, 4)" , fontWeight:"bold", fontSize:"30px"} }>WORKTYPE&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody  className='heading' sx={{ fontWeight:"bold"} } >
          {rows.map((row) => (
            <TableRow  className='heading' sx={{ fontWeight:"bold"} }
              key={row.date}
              
            >
              <TableCell component="th" scope="row" className='heading'  sx={{ fontWeight:"bold",fontSize:"20px"} }>
                {row.date}
              </TableCell>
              <TableCell  className='heading'  sx={{ fontWeight:"bold", fontSize:"20px"} }>{row.Yield}</TableCell>
              <TableCell  className='heading'  sx={{ fontWeight:"bold",fontSize:"20px"} }>{row.work}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
