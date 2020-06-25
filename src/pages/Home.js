import React from 'react';
import Post from '../components/Post';
import './Home.css';

const PostList = (props) => {
	return (
		<div className='posts'>
			{props.posts.map((post) => (
				<Post
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
