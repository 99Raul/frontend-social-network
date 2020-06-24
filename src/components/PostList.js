import React, { Component } from 'react';
import Api from '../Api';
import Post from './Post';

class PostList extends Component {
	render() {
		return (
			<div className='posts'>
				{this.props.posts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</div>
		);
	}
}

export default PostList;
