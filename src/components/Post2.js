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
import { ListItemText } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CommentIcon from '@material-ui/icons/Comment';
import { Redirect } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 500,
		marginTop: '5px',
		textAlign: 'center',
		// backgroundColor:'#121212'
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
	button: {
		marginTop: '1px',
	},
}));

const Post = (props) => {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);
	const [deleted, setDeleted] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const [state, setState] = useState({ comment: '' });
	// console.log(props);
	const comment = state.comment;

	const createComment = () => {
		props.postComment({
			body: comment,
			post: props.post.id,
		});
		setState({ comment: '' });
	};

	const deletePost = (event) => {
		// console.log(localStorage.getItem('token'));

		const url = `https://limitless-lake-38991.herokuapp.com/post/${event.target.id}`;
		// props.token
		fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json; charset=UTF-8',
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		})
			.then((res) => {
				console.log(res.data);
				setDeleted(true);
			})
			.catch(console.error);
		//  alert('You are not authorized');
	};

	if (deleted) {
		return <Redirect to='/' />;
		// return <Redirect to={`/doctors/${props.doctorCity}`} />;
		// {`/doctor/${props.doctorId}`}
	}
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
				title={props.post.title}
				subheader={props.post.created}
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
				<IconButton aria-label='delete' onClick={deletePost}>
					<DeleteIcon />
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
			<Collapse in={expanded} timeout='auto' unmountOnExit>
				<CardContent>
					<Typography paragraph>Comments:</Typography>
					<List>
						<ListItemText>
							{props.post.comments.map((comment, index) => {
								return <ListItem key={index}>{comment}</ListItem>;
							})}
						</ListItemText>
					</List>
					{props.user && (
						<FormControl>
							<TextField
								id='standard-name'
								placeholder='Post a comment'
								value={comment}
								onChange={(e) => setState({ comment: e.target.value })}
							/>
							<Button
								variant='contained'
								color='primary'
								className={classes.button}
								startIcon={<CommentIcon />}
								onClick={createComment}>
								Comment
							</Button>
						</FormControl>
					)}
				</CardContent>
			</Collapse>
		</Card>
	);
};

export default Post;
