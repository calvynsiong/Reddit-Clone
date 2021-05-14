import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineBell, AiOutlineUser } from 'react-icons/ai';
import { Toolbar, Typography, Tabs, Tab, AppBar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		flexGrow: 1,
		marginTop: '56px',
		paddingTop: '1em',
		border: 'none',
	},
	appbar: {
		display: 'flex',
		boxShadow: 'none',
		background: 'transparent',
	},
	tab: {
		display: 'flex',
		justifySelf: 'flex-start',
	},
	social: {
		display: 'flex',
		alignItems: 'center',
		marginLeft: 'auto',
		'& > *': {
			padding: '.2em',
		},
	},
}));

const Main = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='static' className={classes.appbar}>
				<Toolbar style={{ display: 'flex', width: '100%', margin: 'auto' }}>
					<Tabs
						variant='scrollable'
						className={classes.tab}
						aria-label='simple tabs example'
						indicatorColor='primary'
						textColor='primary'>
						<Tab label='Popular' color='primary' style={{ minWidth: 50 }} />
						<Tab label='Hot' style={{ minWidth: 50 }} />
						<Tab label='Rising' style={{ minWidth: 50 }} />
						<Tab label='Global' style={{ minWidth: 50 }} />
						<Tab
							label='Controversial'
							style={{ minWidth: 50, display: 'flex', alignItems: 'center' }}
						/>
					</Tabs>
					<div className={classes.social}>
						<AiOutlineBell size={35}></AiOutlineBell>
						<AiOutlineUser size={35}></AiOutlineUser>
						<Typography color='secondary' variant='h6' align='right'>
							Calvyn Siong
						</Typography>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Main;
