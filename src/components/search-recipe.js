import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import '../style.css';

const SearchRecipe = ({handleRecipeNameChange, handleRecipeSubmit}) => (
  <Row>
    <Col md={4} sm={4} xs={4}>
      <FormGroup>
        <FormControl
          type="text"
          name="recipeName"
          onChange={(event) => {
            handleRecipeNameChange(event.target.value)
          }}
          placeholder="Enter recipe name to search"
          className="search-box"
        />
      </FormGroup>
    </Col>
    <Col md={4} sm={4} xs={4}>
      <img
        src="/images/btn-recipes.png"
        className="btn-recipes"
        onClick={() => {
          handleRecipeSubmit()
        }}
      />
    </Col>
  </Row>
);

export default SearchRecipe;
