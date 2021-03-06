import React from 'react';
import Post from './Post.jsx';
import  posts  from '../data/data.js';
import { Typography, makeStyles,Paper, Container } from '@material-ui/core';

const useStyles = makeStyles({
	post: {
        display: 'flex',
        flexDirection:"column",
		margin: '0 auto',
		maxWidth: '90vw',
		padding: '1em',
		borderRadius: '5px',
	},
});
const Content = () => {
    const classes = useStyles();


	return (
		<Container className={classes.post}>
            {posts.map((post, index) => {
                    console.log(index);
                    return <Post key={index} max={posts.length}  post={post}></Post>;
                })}
       
        </Container>
                );
};

export default Content;
