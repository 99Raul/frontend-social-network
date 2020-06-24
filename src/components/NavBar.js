import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function NavBar({ user, logOut }) {
	return (
		<>
			<Navbar className='nav'>
				<Navbar.Brand href='/home'>Dev Questions</Navbar.Brand>
				<Nav className='mr-auto'>
					<Nav.Link href='/'>Home</Nav.Link>
					<Nav.Link href='/about'>About</Nav.Link>
					{!user && <Nav.Link href='/signup'>Sign Up</Nav.Link>}
					{!user && <Nav.Link href='/login'>Log in</Nav.Link>}
					{user && <Nav.Link href='/post'>Post</Nav.Link>}
					{user && <Nav.Link onClick={logOut}>Log Out</Nav.Link>}
				</Nav>
				<Form inline>
					<FormControl type='text' placeholder='Search' className='mr-sm-2' />
					<Button className='search-button'>Search</Button>
				</Form>
			</Navbar>
		</>
	);
}
export default NavBar;
