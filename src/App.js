import React from 'react';
import './App.css';
import Home from './pages/Home.js';
import LogIn from './pages/LogIn.js';
import SignUp from './pages/SignUp.js';
import About from './pages/About.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import LogOut from './pages/LogOut';
import Api from './Api';
import NewPost from './pages/NewPost';
import Profile from './pages/Profile';
import EditPost from './pages/EditPost'

function App() {
	const [user, setUser] = React.useState(null);
	const [posts, setPosts] = React.useState([]);
	// const [editPost, setEditPost] = React.useState([]);
	// const [authToken, setAuthToken] = useState(null);
	React.useEffect(() => {
		fetchPosts();
		let savedTokens = localStorage.getItem('tokens');
		if (savedTokens) {
			savedTokens = JSON.parse(savedTokens);
			Api.checkToken(savedTokens.access).then((res) => {
				if (res.status === 200) {
					Api.setToken(savedTokens.access);
					const savedUser = localStorage.getItem('user');
					setUser(savedUser);
				} else {
					logOut();
				}
			});
		}
	}, []);
	const fetchPosts = () => {
		Api.getAllPosts().then((res) => {
			setPosts(res.data);
		});
	};
	const signUp = (newUser) => {
		Api.createUser(newUser).then((res) => {
			const tokens = res.data;
			console.log(tokens);
			Api.setToken(tokens.access);
			localStorage.setItem('tokens', JSON.stringify(tokens));
			const { email } = newUser;
			localStorage.setItem('user', email);
			setUser(email);
		});
	};
	const logOut = () => {
		localStorage.removeItem('tokens');
		localStorage.removeItem('user');
		setUser(null);
	};
	const logIn = (credentials) => {
		Api.logIn(credentials).then((res) => {
			console.log(res.data);
			const tokens = res.data;
			console.log(tokens);
			Api.setToken(tokens.access);
			localStorage.setItem('tokens', JSON.stringify(tokens));
			localStorage.setItem('user', credentials.email);
			setUser(credentials.email);
		});
	};
	const postComment = (comment) => {
		comment.user = user;
		Api.postComment(comment).then((res) => {
			fetchPosts();
		});
	};
	const createPost = (post) => {
		post.user = user;
		post.comments = [];
		Api.createPost(post).then((res) => {
			fetchPosts();
		});
	};
	const editPosts= (post) => {
		post.user = user;
		post.comments = [];
		Api.editPosts(post).then((res) => {
			fetchPosts();
		});
	};

	return (
		<div className='app'>
			<Router>
				<NavBar user={user} logOut={logOut} />
				<div className='container'>
					<Switch>
						<Route exact path='/'>
							<Home posts={posts} postComment={postComment} user={user} />
						</Route>
						<Route exact path='/login'>
							<LogIn logIn={logIn} user={user} />
						</Route>
						<Route exact path='/signup'>
							<SignUp submitSignUp={signUp} user={user} />
						</Route>
						<Route exact path='/logout' component={LogOut} />
						<Route exact path='/about' component={About} />
						<Route exact path='/post'>
							<NewPost createPost={createPost} />
						</Route>
						<Route exact path='/profile' component={Profile} />
						<Route exact path='/edit'
							render={(routerProps) => {
								return (
									<EditPost
										editPosts={editPosts}
										
									/>
								);
							}}
						/>
					</Switch>
				</div>
			</Router>
		</div>
	);
}



export default App;
