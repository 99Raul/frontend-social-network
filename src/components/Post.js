import React, { useState } from 'react';
import {
	Card,
	ListGroup,
	ListGroupItem,
	FormControl,
	InputGroup,
	Button,
} from 'react-bootstrap';
// import deleteComment from './DeletePost'

const Post = (props) => {
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

	return (
		<Card className='my-3'>
			<Card.Body>
				<Card.Title>{props.post.title}</Card.Title>
				<Card.Text>{props.post.body}</Card.Text>
				<Card.Text>{props.post.liked}</Card.Text>
			</Card.Body>
			<ListGroup className='list-group-flush'>
				{props.post.comments.map((comment, index) => {
					return <ListGroupItem key={index}>{comment}</ListGroupItem>;
				})}
			</ListGroup>
			{props.user && (
				<InputGroup className='mb-3'>
					<FormControl
						placeholder='Post a comment'
						value={comment}
						onChange={(e) => setState({ comment: e.target.value })}
					/>
					<InputGroup.Append>
						<Button variant='primary' onClick={createComment}>
							Comment
						</Button>
					</InputGroup.Append>
				</InputGroup>
			)}
		</Card>
	);
};
export default Post;
