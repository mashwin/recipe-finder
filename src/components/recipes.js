import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../style.css';

const Recipes = ({recipes}) => (
  <Row>
    {
      recipes && recipes.map((recipe, index) => (
        <Row className="recipe-box" key={index}>
          <Col md={2} sm={2} xs={2}>
            <a href={recipe.href} target="_blank"><img src={recipe.thumbnail} width="107" /></a>
          </Col>
          <Col md={4} sm={4} xs={4}>
            <p className="recipe-title">{recipe.title}</p>
            <p>{recipe.ingredients}</p>
          </Col>
        </Row>
      ))
    }
  </Row>
)

export default Recipes;
