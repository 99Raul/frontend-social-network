import React from 'react';
import Api from '../Api';
import Post from './Post';

const PostList = (props) => {
	return (
		<div className='posts'>
			{props.posts.map((post) => (
				<Post key={post.id} post={post} />
			))}
		</div>
	);
};

export default PostList;
