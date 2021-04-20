import React from 'react';
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
import './Navigation.css';
const navbarImg = process.env.PUBLIC_URL + '/images/';

function Navigation() {
  return (
    // <div className='navbar'>
    //   <img
    //     className='navbar__Logo'
    //     src={`${navbarImg}jobbyist-logo.png`}
    //     alt='logo'
    //   />
    //   <h1>This is a navbar!</h1>
    // </div>
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
          <Nav.Link href='#features'>Features</Nav.Link>
          <Nav.Link href='#pricing'>Pricing</Nav.Link>
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
