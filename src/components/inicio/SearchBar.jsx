import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { BiSearchAlt2 } from 'react-icons/bi';

function SearchBar() {
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Buscar productos, marcas y más..."
        className="me-3"
        aria-label="Search"
        style={{width: '500px'}}
      />
      <Button variant="outline-success">
        <BiSearchAlt2 size={20} />
      </Button>
    </Form> 
  );
}

export default SearchBar;
