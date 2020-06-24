import axios from 'axios';

const Api = axios.create({
	//Axios creates reusable instances with baseUrl
	baseURL: 'http://localhost:8000/',
});
export default {
	getAllPosts() {
		//query what will be displayed in url
		return Api.get(`/posts/`);
	},
	getAllComments() {
		//query what will be displayed in url
		return Api.get(`/comments/`);
	},
	createUser(user) {
		return Api.post(`/users/register`, user);
	},
	setToken(token) {
		return (Api.defaults.headers.common['Authorization'] = `Bearer ${token}`);
	},
	checkToken(token) {
		return Api.post(`/api/token/verify/`, { token });
	},
	logIn(user) {
		return Api.post(`/api/token/`, user);
	},
	postComment(comment) {
		return Api.post(`/comments/`, comment);
	},
	createPost(post) {
		return Api.post(`/posts/`, post);
	},
};
