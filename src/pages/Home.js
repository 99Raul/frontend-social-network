import React from 'react';
import Post2 from '../components/Post2';
import './Home.css';

const PostList = (props) => {
	return (
		<div className='posts'>
			{props.posts.map((post) => (
				<Post2
					key={post.id}
					post={post}
					postComment={props.postComment}
					user={props.user}
				/>
			))}
		</div>
	);
};

export default PostList;
