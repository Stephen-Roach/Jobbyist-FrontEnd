import React from 'react';
const navbarImg = process.env.PUBLIC_URL + '/images/';

function Navbar() {
  return (
    <div>
      <img src={`${navbarImg}jobbyist-logo.png`} alt='logo' />
      <h1>This is a navbar!</h1>
    </div>
  );
}

export default Navbar;
