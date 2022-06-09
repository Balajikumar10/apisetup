import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Routes, Route, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Post() {
    let params = useParams();
    console.log('paramss::', params)
    let userId = params.id
    const [post, setPost] = useState([])
    // console.log("post", props.route.params.id);
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then((res) => res.json()).then((pect) => setPost(pect))
    }, [])

    const clickhandler = (value) => {
        navigate(`/comments/${value}`)
    }
    console.log("dd", post);
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {post.map((row, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Item style={{ backgroundColor: "lightblue" }}>{row.name}
                                <h3>USERID</h3>{row.userId}
                                <h3>TITLE</h3>{row.title}
                                <h3>BODY</h3>{row.body}<br />
                                <Button onClick={() => clickhandler(row.userId)}>COMMENTS </Button>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>

                </Table>
            </TableContainer>
        </div>
    )
}

export default Post