import React, { useEffect, useState } from 'react';
// import { APIURL } from '../config';
import { Link, Redirect } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const DeletePost = (props) => {
	const [deleted, setDeleted] = useState(false);

	const deleteComment = (event) => {
		console.log(props.token);
		const url = `https://limitless-lake-38991.herokuapp.com/posts/${event.target.id}`;
		props.token
			? fetch(url, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json; charset=UTF-8',
						Authorization: `Bearer ${props.token}`,
					},
			  })
					.then((res) => {
						console.log(res);
						setDeleted(true);
					})
					.catch(console.error)
			: alert('You are not authorized');
	};
	if (deleted) {
		return <Redirect to='/' />;
		// return <Redirect to={`/doctors/${props.doctorCity}`} />;
		// {`/doctor/${props.doctorId}`}
	}

	return (
		<Card.Link>
			<button onClick={deleteComment} className='btn delete'>
				Delete
			</button>
		</Card.Link>
	);
};

export default DeletePost;
