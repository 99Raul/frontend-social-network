import React, { useState } from 'react';
// import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

const Profile = (props) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// const [postList, setPostList] = useState([]);

	// useEffect(() => {
	// 	fetchData();
	// }, []);

	// const fetchData = (id) => {
	// 	axios
	// 		.get(`https://limitless-lake-38991.herokuapp.com/profile/${id}`)
	// 		.then((res) => {
	// 			console.log(res);
	// 			setPostList(res.data);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error.response);
	// 		});
	// };

	return (
		<>
			<Button variant='primary' onClick={handleShow}>
				Update Profile
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Profile</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
				<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
				<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
				<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					{/* <Button variant='primary' onClick={handleClose}>
						Save Changes
					</Button> */}
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Profile;
