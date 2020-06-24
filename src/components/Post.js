import React, { Component } from 'react';
import {
	Card,
	ListGroup,
	ListGroupItem,
	FormControl,
	InputGroup,
	Button,
} from 'react-bootstrap';
class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: '',
		};
	}
	createComment = () => {
		this.props.postComment({
			body: this.state.comment,
			post: this.props.post.id,
		});
		this.setState({ comment: '' });
	};
	render() {
		return (
			<Card className='my-3'>
				<Card.Body>
					<Card.Title>{this.props.post.title}</Card.Title>
					<Card.Text>{this.props.post.body}</Card.Text>
				</Card.Body>
				<ListGroup className='list-group-flush'>
					{this.props.post.comments.map((comment, index) => {
						return <ListGroupItem key={index}>{comment}</ListGroupItem>;
					})}
				</ListGroup>
				{this.props.user && (
					<InputGroup className='mb-3'>
						<FormControl
							placeholder='Post a comment'
							value={this.state.comment}
							onChange={(e) => this.setState({ comment: e.target.value })}
						/>
						<InputGroup.Append>
							<Button variant='primary' onClick={this.createComment}>
								Comment
							</Button>
						</InputGroup.Append>
					</InputGroup>
				)}
			</Card>
		);
	}
}
export default Post;
