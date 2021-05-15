import React from 'react';
import Post from './Post.jsx';
import { posts } from '../data/data.js';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	post: {
        display: 'flex',
        flexDirection:"column",
		margin: '0 auto',
		maxWidth: '95vw',
		backgroundColor: 'white',
		padding: '1em',
		borderRadius: '5px',
		boxShadow: '-1px 0px 5px 5px #F4f5fa',
	},
});
const Content = () => {
	const classes = useStyles();

	return (
		<div className={classes.post}>
			{posts.map((post) => {
				return <Post post={post}></Post>;
			})}
		</div>
	);
};

export default Content;
