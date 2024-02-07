import * as React from 'react';
import { useEffect, useState } from "react"
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Could use the API to expose this
const API_BASE_URL  = 'http://41.89.92.186:8000/users/'

// Get Data
function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch(API_BASE_URL).then((res)=>{
        return res.json()
    })
    .then((data)=>{
        setData(data)
    })
},[])
  return (
    <React.Fragment>
      <Title>Recent Users</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell>URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.url}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more Users
      </Link>
    </React.Fragment>
  );
}







