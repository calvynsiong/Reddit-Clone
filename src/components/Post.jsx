import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from 'react-icons/fa';
import { Container, Typography } from '@material-ui/core';

const useStyles = makeStyles({
	Post: {
		padding: '1rem 0',
		display: 'flex',
		alignItems: 'center',
	},
	Left: {
		width: '50px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		'&>*': {
			paddingTop: '.5em',
		},
	},
	Center: {
		'&>img': {
			objectFit: 'cover',
			height: '60px',
			width: '60px',
			borderRadius: '5px',
			marginLeft: '1em',
		},
	},
	Right: {
        width: '85%',
        marginLeft: "1em",
	},
	Title: {
        fontSize: "1rem",
        wordWrap: "ellipsis",
        fontWeight: "600",
	},
});

const Post = (props) => {
	const classes = useStyles();

	const { upvotes, image, user, subreddit, title, comments } = props.post;

	return (
		<Container className={classes.Post}>
			<div className={classes.Left}>
				<FaArrowAltCircleUp size={30}></FaArrowAltCircleUp>
				<span>{upvotes}</span>
				<FaArrowAltCircleDown size={30}></FaArrowAltCircleDown>
			</div>
			<div className={classes.Center}>
				<img src={image} alt={title} />
			</div>
			<div className={classes.Right}>
				<Typography variant='h6' className={classes.Title}>
					{title}
				</Typography>
			</div>
		</Container>
	);
};

export default Post;
