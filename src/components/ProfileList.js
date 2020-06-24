import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileList = (props) => {
	const [postList, setPostList] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		axios
			.get('https://limitless-lake-38991.herokuapp.com/profile/')
			.then((res) => {
				console.log(res);
				setPostList(res.data);
			});
	};

	return <></>;
};

export default ProfileList;
