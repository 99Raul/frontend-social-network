import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
	// media: {
	// 	height: 0,
	// 	paddingTop: '56.25%', // 16:9
	// },
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
}));

const RecipeReviewCard = (props) => {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const [state, setState] = useState({ comment: '' });
	console.log(props);
	const comment = state.comment;

	const createComment = () => {
		props.postComment({
			body: comment,
			post: props.post.id,
		});
		setState({ comment: '' });
	};

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label='recipe' className={classes.avatar}>
						{}
					</Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<MoreVertIcon />
					</IconButton>
				}
				title={props.title}
				subheader={props.created}
			/>
			{/* <CardMedia
				className={classes.media}
				image=''
				title='Paella dish'
			/> */}
			<CardContent>
				<Typography variant='body2' color='textSecondary' component='p'>
					{props.post.body}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label='add to favorites'>
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label='share'>
					<ShareIcon />
				</IconButton>
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label='show more'>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			{props.user && (
				<Collapse in={expanded} timeout='auto' unmountOnExit>
					<CardContent>
						<Typography paragraph>Comments:</Typography>
						<List>
							<ListItem button>
								<ListItemAvatar>
									<Avatar alt={''} src={''} />
								</ListItemAvatar>
							</ListItem>
							<ListItemText>
								{props.post.comments.map((comment, index) => {
									return <ListItem key={index}>{comment}</ListItem>;
								})}
							</ListItemText>
						</List>
					</CardContent>
				</Collapse>
			)}
		</Card>
	);
};
