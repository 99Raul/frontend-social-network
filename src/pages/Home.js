import React, { Component } from 'react';
import Post from '../components/Post';
import './Home.css'

class PostList extends Component {
	render() {
		return (
			<div className='posts'>
				{this.props.posts.map((post) => (
					<Post
						key={post.id}
						post={post}
						postComment={this.props.postComment}
						user={this.props.user}
					/>
				))}
			</div>
		);
	}
}

export default PostList;
