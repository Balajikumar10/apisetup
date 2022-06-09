import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import Post from './Post';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function Api() {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((i) => setData(i))
    }, [])
    console.log("data", data);

    const clickhandler = (value) => {
        navigate(`/post/${value}`)
        console.log(value);
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                    {data.map((x, index) => (
                        <Grid item xs={2} sm={4} md={6} key={index} >
                            <Item style={{ backgroundColor: "lightblue" }}>{x.name}<br />
                                <Button onClick={() => clickhandler(x.id)}>details</Button></Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>




        </div>
    )
}

export default Api