import React from 'react';
import { Navbar, Header, Brand } from 'react-bootstrap';
import '../style.css';

const RecipeHeader = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">
          <img src="images/recipe-logo.png" id="logo"
  />         Recipe Finder
        </a>
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
);

export default RecipeHeader;
