import React from 'react';
import Api from '../Api';
import Post2 from './Post2';

const PostList = (props) => {
	return (
		<div className='posts'>
			{props.posts.map((post) => (
				<Post2 key={post.id} post={post} />
			))}
		</div>
	);
};

export default PostList;
