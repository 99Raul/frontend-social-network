import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class NewPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: '',
			redirect: false,
		};
	}
	titleInput = (event) => {
		this.setState({ title: event.target.value });
	};
	bodyInput = (event) => {
		this.setState({ body: event.target.value });
	};
	submitPost = (event) => {
		event.preventDefault();
		this.props.createPost(this.state);
		this.setState({ redirect: true });
	};

	render() {
		return (
			<form onSubmit={this.submitPost}>
				{this.state.redirect ? <Redirect to='/' /> : null}
				<h3>Make A Post</h3>

				<div className='form-group'>
					<label>Title</label>
					<input
						className='form-control'
						placeholder='Title'
						value={this.state.title}
						onChange={this.titleInput}
					/>
				</div>

				<div className='form-group'>
					<label>Post</label>
					<textarea
						className='form-control'
						placeholder='Write post here'
						value={this.state.body}
						onChange={this.bodyInput}
					/>
				</div>

				<button type='submit' className='btn btn-primary btn-block'>
					Post
				</button>
			</form>
		);
	}
}

export default NewPost;
