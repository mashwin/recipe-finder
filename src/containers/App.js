import React, { Component } from 'react';
import { RecipeHeader, SearchRecipe, Recipes } from '../components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateRecipeName, updateRecipes } from '../actions';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {

  handleRecipeNameChange = (recipeName) => {
    this.props.updateRecipeName(recipeName);
  }

  handleRecipeSubmit = () => {
    const api = `http://www.recipepuppy.com/api/?q=${this.props.recipeName}`;

    // fetch the recipe api
    fetch(api, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        this.props.updateRecipes(json.results);
      })
      .catch((error) => {
        console.log('Error in fetching data');
      });
  }

  render() {
    {
      console.log(this.props.recipes);
    }
    return (
      <div>
        <RecipeHeader />
        <Grid>
          <Row>
            <Col md={12} xs={12} sm={12}>
              <SearchRecipe
      handleRecipeNameChange={this.handleRecipeNameChange}
      handleRecipeSubmit={this.handleRecipeSubmit}
      />
            </Col>
          </Row>
          <Row>
            <Col md={12} xs={12} sm={12}>
              {
      this.props.recipes !== undefined ? <Recipes recipes={this.props.recipes} /> : <div></div>
      }
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    recipeName: state.recipe.recipeName,
    recipes: state.recipe.recipes
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateRecipeName: updateRecipeName,
    updateRecipes: updateRecipes
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
