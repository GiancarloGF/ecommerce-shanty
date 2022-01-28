import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	navbar: {
		backgroundColor: '#000',
		'& a': {
			color: '#FFFFFF',
			marginLeft: 10,
		},
		'& .MuiSwitch-track': {
			backgroundColor: '#FFFFFF',
		},
	},
	navbar__options: {
		display: 'flex',
		alignItems: 'center',
		gap: '2rem',
	},
	main: {
		minHeight: '80vh',
	},
	footer: {
		textAlign: 'center',
		marginTop: 10,
	},
	section: {
		marginTop: 10,
		marginBottom: 10,
	},
	form: {
		width: '100%',
		maxWidth: 800,
		margin: '0 auto',
	},
	brand: {
		fontWeight: 'bold',
		fontSize: 'clamp(1.2rem, 2.5vw, 2.5rem)',
	},
	grow: {
		flexGrow: 1,
	},

	navbarButton: {
		color: '#ffffff',
		textTransform: 'initial',
	},

	transparentBackgroud: {
		backgroundColor: 'transparent',
	},

	error: {
		color: '#f04040',
	},

	fullWidth: {
		width: '100%',
	},
	reviewForm: {
		maxWidth: 800,
		width: '100%',
	},
	reviewItem: {
		marginRight: '1rem',
		borderRight: '1px #808080 solid',
		paddingRight: '1rem',
	},
	toolbar: {
		justifyContent: 'space-between',
	},
	menuButton: { padding: 0 },
	mt1: { marginTop: '1rem' },

	// search
	searchSection: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	searchForm: {
		border: '1px solid #ffffff',
		backgroundColor: '#ffffff',
		borderRadius: 5,
	},
	searchInput: {
		paddingLeft: 5,
		color: '#000000',
		'& ::placeholder': {
			color: '#606060',
		},
	},
	iconButton: {
		backgroundColor: '#f8c040',
		padding: 5,
		borderRadius: '0 5px 5px 0',
		'& span': {
			color: '#000000',
		},
	},
	sort: {
		marginRight: 5,
	},
	fullContainer: { height: '100vh' },
	mapInputBox: {
		position: 'absolute',
		display: 'flex',
		left: 0,
		right: 0,
		margin: '10px auto',
		width: 300,
		height: 40,
		'& input': {
			width: 250,
		},
	},

	/* CARD */
	card: {},
	cardmedia: {
		[theme.breakpoints.up('md')]: {
			height: 400,
		},
	},
}));
export default useStyles;
