import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class EditPost extends Component {
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
		this.props.editPosts(this.state);
		this.setState({ redirect: true });
	};

	render() {
		return (
			<form onSubmit={this.submitPost}>
				{this.state.redirect ? <Redirect to='/' /> : null}
				{/* {this.props.posts.map((post) => (
					<Post key={post.id} post={post} />
					))} */}

				<h3>Edit A Post</h3>

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
					Edit
				</button>
			</form>
		);
	}
}

export default EditPost;

// import React, { useState, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
// import Post from '../components/Post';

// function EditPost(props) {
// 	const { postId, authToken } = props;
// 	const [code, setCode] = useState(null);
// 	const [newCode, setNewCode] = useState(null);

// 	useEffect(() => {
// 		fetch(`https://limitless-lake-38991.herokuapp.com/post/${postId}`)
// 			.then((response) => response.json())
// 			.then((data) => {
// 				console.log(data);
// 				setCode(data);
// 			});
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, []);

// 	const handleChange = (event) => {
// 		event.persist();
// 		setCode({
// 			...code,
// 			[event.target.name]: event.target.value,
// 		});
// 	};

// 	const handleSubmit = (event) => {
// 		event.preventDefault();

// 		console.log(code);
// 		fetch(`https://limitless-lake-38991.herokuapp.com/post/${postId}`, {
// 			method: 'PUT',
// 			headers: {
// 				'Content-type': 'application/json; charset=UTF-8',
// 				Authorization: `Bearer ${authToken.token}`,
// 			},
// 			body: JSON.stringify(code),
// 		})
// 			.then((response) => response.json())
// 			.then((data) => {
// 				setNewCode(data.id);
// 				console.log(data);
// 			})
// 			.catch(console.error);
// 	};
// 	// };

// 	if (newCode) {
// 		return <Redirect to={'/posts/'} />;
// 	}

// 	if (!code) {
// 		return <div>Loading...</div>;
// 	}

// 	return (
// 		<>
// 			<h1>Edit Code</h1>
// 			<Post
// 				code={code}
// 				handleChange={handleChange}
// 				handleSubmit={handleSubmit}
// 			/>
// 		</>
// 	);
// }

// export default EditPost;
