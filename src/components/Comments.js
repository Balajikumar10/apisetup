import React, { useState, useEffect } from 'react'
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

function Comments() {
    const [comment, setComment] = useState([])
    const param = useParams();
    console.log("param", param);
    let postId = param.id
    console.log("post", param);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then((res) => res.json()).then((resp) => setComment(resp))
    }, [])
    console.log("ss", comment);
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {comment.map((comment, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Item style={{ backgroundColor: "lightblue" }}> {comment.postId}
                                <h3>USERID</h3> {comment.id}<br />
                                <h3>TITLED</h3>  {comment.email}
                                <h3>BODY</h3> {comment.body}<br />
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}
export default Comments