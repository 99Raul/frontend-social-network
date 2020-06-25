import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
		padding: '5px',
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
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
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
	links: {
		padding: '8px',
		color: 'white',
		// display:'inline'
		// [theme.breakpoints.up('sm')]: {
		// 	width: '12ch',
		// 	'&:focus': {
		// 		width: '20ch',
		// 	},
		// },
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
	},
}));

const SearchAppBar = ({ user, logOut }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='open drawer'>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' className={classes.title}>
						<Link
							href='/'
							className={classes.links}
							style={{ textDecoration: 'none' }}>
							Home
						</Link>
						<Link
							href='/about'
							className={classes.links}
							style={{ textDecoration: 'none' }}>
							About
						</Link>
						{!user && (
							<Link
								href='/signup'
								className={classes.links}
								style={{ textDecoration: 'none' }}>
								Sign Up
							</Link>
						)}
						{!user && (
							<Link
								href='/login'
								className={classes.links}
								style={{ textDecoration: 'none' }}>
								Log in
							</Link>
						)}
						{user && (
							<Link
								href='/post'
								color='primary'
								className={classes.links}
								style={{ textDecoration: 'none' }}>
								Post
							</Link>
						)}
						{user && (
							<Link
								href='/profile'
								color='primary'
								className={classes.links}
								style={{ textDecoration: 'none' }}>
								Profile
							</Link>
						)}
						{user && (
							<Link
								href='/edit'
								color='primary'
								className={classes.links}
								style={{ textDecoration: 'none' }}>
								Edits
							</Link>
						)}
						{user && (
							<Link
								onClick={logOut}
								className={classes.links}
								style={{ textDecoration: 'none' }}>
								Log Out
							</Link>
						)}
					</Typography>

					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder='Search…'
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default SearchAppBar;
