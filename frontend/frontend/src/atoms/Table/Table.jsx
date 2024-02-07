import * as React from 'react';
import "./Table.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function BasicTable({data}) {
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
          {data.map((item) => (
            <TableRow>
              <TableCell  className='heading'  sx={{ fontWeight:"bold",fontSize:"20px"} }>{item.date}\</TableCell>
              <TableCell  className='heading'  sx={{ fontWeight:"bold", fontSize:"20px"} }>{item.yield_obtained}</TableCell>
              <TableCell  className='heading'  sx={{ fontWeight:"bold",fontSize:"20px"} }>{item.workdone}</TableCell>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
