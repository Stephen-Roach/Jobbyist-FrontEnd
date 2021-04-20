import React from 'react';
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
import './Navigation.css';
const navbarImg = process.env.PUBLIC_URL + '/images/';

function Navigation() {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>
          {' '}
          <img
            className='navbar__Logo'
            src={`${navbarImg}jobbyist-logo.png`}
            alt='logo'
          />
        </Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#features'>Find Jobs</Nav.Link>
          <Nav.Link href='#pricing'>Search Salaries</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-info'>Search</Button>
        </Form>
      </Navbar>
    </>
  );
}

export default Navigation;
