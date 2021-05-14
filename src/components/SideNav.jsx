import React from 'react';
import PropTypes from 'prop-types';
import { FcReddit } from 'react-icons/fc';
import { FaMoon, FaRegMoon } from 'react-icons/fa';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Button } from '@material-ui/core';

import { fade, makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'space-between',
		
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		margin: 'auto',
		width: '90%',
		marginTop: '1em',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
		width: '80%',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		border: 'black',
		width: '80%',
		[theme.breakpoints.up('md')]: {
			width: '10ch',
		},
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		// [theme.breakpoints.up('sm')]: {
		// 	width: drawerWidth,
		// 	flexShrink: 0,
		// },
	},
	// appBar: {
	//     width: `calc(100% - ${drawerWidth}px)`,
	//     marginLeft: drawerWidth,
	// 	[theme.breakpoints.up('sm')]: {
	// 		width: `calc(100% - ${drawerWidth}px)`,
	// 		marginLeft: drawerWidth,
	// 	},
	// },
	menuButton: {
		// marginRight: theme.spacing(2),
		marginLeft: '.5em',
		// display: 'none',
		// [theme.breakpoints.up('sm')]: {
		// },
	},

	// necessary for content to be below app bar
	toolbar: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	logo: {
		padding: '1rem',
	},
	list: {
		paddingTop: '1em',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
	}
}));

function SideNav(props) {
	const { window, darkMode, setDarkMode } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const subreddits = [
		'Agedlikemilk',
		'Arduino',
		'AskHistorians',
		'AskReddit',
		'Aww',
		'BuyItForLife',
		'Investing',
		'CrazyIdeas',
		'Explainlikeimfive',
		'Financialindependce',
		'Frontend',
		'Frugal',
		'Gorillaz',
		'Headphones',
		'Kanye',
		'learnjavascript',
		'Nba',
		'Manga',
		'News',
		'Paladins',
		'reactjs',
	].sort();

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<div className={classes.toolbar}>
				{' '}
				<FcReddit size={30} />
				<Typography
					color='secondary'
					className={classes.logo}
					variant='h4'
					align='right'>
					Reddit
				</Typography>
			</div>

			<Divider />
			<div className={classes.search}>
				<div className={classes.searchIcon}>
					<SearchIcon />
				</div>
				<InputBase
					color='primary'
					placeholder='Search…'
					classes={{
						root: classes.inputRoot,
						input: classes.inputInput,
					}}
					inputProps={{ 'aria-label': 'search' }}
				/>
			</div>
			<List className={classes.list}>
				{['Popular', 'All', 'Random', 'Users', 'Top Communities'].map(
					(text, index) => (
						<ListItem button key={text} >
							<ListItemText primary={text}/>
						</ListItem>
					),
				)}
			</List>
			<Divider />
			<List className={classes.list}>
				<Typography
					variant='h6'
					style={{ textAlign: 'start', marginLeft: '1em' }}
					color='initial'>
					Subreddits
				</Typography>
				{subreddits.map((text, index) => (
					<ListItem
						button
						key={text}
						component='a'
						target='blank'
						href={`https://www.reddit.com/r/${text}`}>
						<ListItemText primary={`r/${text}`} />
					</ListItem>
				))}
				<ListItem>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={() => setDarkMode(!darkMode)}>
						{darkMode ? <FaMoon size={20} /> : <FaRegMoon size={20} />}
					</IconButton>
				</ListItem>
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar className={classes.appBar} color='dark'>
				<Toolbar className={classes.root}>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						className={classes.menuButton}>
						<FcReddit />

						<Typography variant='h6' color='secondary' style={{marginLeft:"1em"}}noWrap>
							Reddit
						</Typography>
					</IconButton>
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer} aria-label='mailbox folders'>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden xsDown implementation='css'>
					<Drawer
						container={container}
						variant='temporary'
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xlDown implementation='css'>
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant='permanent'
						open>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
		</div>
	);
}

SideNav.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default SideNav;
