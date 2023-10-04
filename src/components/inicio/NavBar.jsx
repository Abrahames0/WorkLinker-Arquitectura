import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import WorkLinker from '../../landing/assets/img/WorkLinker-logo.png';
import SearchBar from './SearchBar';
import Categories from './Categories';

//icons
import { BsCart3 } from 'react-icons/bs'

function NavBar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={WorkLinker}
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="WorkLinker Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <SearchBar />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Categories />
          <Navbar.Brand href="#/">Ayuda</Navbar.Brand>
          <Navbar.Brand href="#/">Mis compras</Navbar.Brand>
          <Navbar.Brand className="ms-auto"> <BsCart3 size={20}/> </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
