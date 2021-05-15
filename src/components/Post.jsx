import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
	FaArrowAltCircleDown,
	FaArrowAltCircleUp,
	FaShareAlt,
	FaSave,
} from 'react-icons/fa';
import { BiHide } from 'react-icons/bi';
import { MdReport } from 'react-icons/md';
import { Typography, Divider, Paper, Link,Popper } from '@material-ui/core';

const useStyles = makeStyles({
	Post: {
		padding: '1rem',
		display: 'flex',
		alignItems: 'center',
		wordWrap: 'break-word',
		// wordBreak: "break-all",
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
		marginLeft: '1em',
		gap: "10px",
		"&>*": {
			margin: "1em 0",
		}
	},
	Title: {
		fontSize: '1rem',
		wordWrap: 'ellipsis',
		fontWeight: '600',
	},
	Link: {
		textDecoration: 'none',
	},
	Info: {
		    marginTop: "5px",
	},
	Outreach: {
		wordWrap: 'break-word',
		display: "flex",
		flexWrap: "wrap",
	}
});

const Post = (props) => {
	const classes = useStyles();

	const { upvotes, image, user, subreddit, title, comments, id, time } =
		props.post;

	return (
		<>
			<Paper className={classes.Post}>
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
						<Link
							href={`https://www.reddit.com/r/${subreddit}`}
							target='blank'
							color='inherit'>
							{title}
						</Link>
					</Typography>
					<span className={classes.Info}>
						Submitted {time} hours ago by 
						<Link
							href={`https://www.reddit.com/u/${user}`}
							target='blank'
							color='secondary'> {` u/${user}`}</Link> to
						<Link
							href={`https://www.reddit.com/r/${subreddit}`}
							target='blank'
							color='secondary'> {`r/${subreddit}`}</Link>
					</span>
					<span className={classes.Info}>
						<Typography
							className = {classes.Outreach}
							variant='body2'
							color='inherit'
							style={{ display: 'flex', alignItems: 'center' }}>
							{comments} comments | Share 
							<FaShareAlt style={{ margin: '0 .3em' }}></FaShareAlt> | Save{' '}
							<FaSave style={{ margin: '0 .3em' }}></FaSave>  | Hide{' '}
							<BiHide style={{ margin: '0 .3em' }}></BiHide> | Report{' '}
							<MdReport style={{ margin: '0 .3em' }}></MdReport> 
						</Typography>
					</span>
				</div>
			</Paper>
			{id === props.max ? <></> : <Divider />}
		</>
	);
};

export default Post;
