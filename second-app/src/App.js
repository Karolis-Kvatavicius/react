import React from 'react';
import MyForm from "./components/crud/MyForm";
import PostHooks from "./components/PostHooks";
import Navi from "./components/Navi";
import { Route, Switch } from "react-router-dom";
import Not_Found from "./components/Not_Found";
import List from "./components/List";
import Shop from "./components/Shop";
import MealsList from './components/the_meal_db/MealsList';
import Recipe from './components/the_meal_db/Recipe';
import Ingredient from './components/the_meal_db/Ingredient';

function App() {
  return (
    <div>
      <Navi />
      <Switch>
        <Route exact path="/" component={Shop} />
        <Route exact path="/crud" component={MyForm} />
        <Route exact path="/post" component={PostHooks} />
        <Route exact path="/posts-list" component={List} />
        <Route exact path="/the-meal-db/ingredient/:name" component={Ingredient} />
        <Route exact path="/the-meal-db/:letter" component={MealsList} />
        <Route exact path="/the-meal-db/by-name/:name" component={MealsList} />
        <Route exact path="/the-meal-db/recipe/:id" component={Recipe} />
        <Route component={Not_Found} />
      </Switch>
    </div>
  );
}

export default App;
