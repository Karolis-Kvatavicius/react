import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import Meal from './Meal';
import RandMeal from './RandMeal';

export default function MealsList({ match }) {

    const [meals, setMeals] = useState([]);
    const [randomMeal, setRandMeal] = useState([]);
    const history = useHistory();

    const mealsByFirstLetter = async () => {
        const fetchedMeals = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?f=${match.params.letter}`);
        setMeals(fetchedMeals.data.meals);
    }

    const mealsByName = async () => {
        const fetchedMeals = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${match.params.name}`);
        setMeals(fetchedMeals.data.meals);
    }

    const randMeal = async () => {
        const fetchedMeal = await axios(`https://www.themealdb.com/api/json/v1/1/random.php`);
        setRandMeal(...fetchedMeal.data.meals);
    }

    const formSubmit = (e) => {
        e.preventDefault();
        history.push(`/the-meal-db/by-name/${e.target.mealSearch.value}`);
        e.target.mealSearch.value = "";
    }

    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    useEffect(() => {
        console.log(match.params);
        if ('letter' in match.params) {
            mealsByFirstLetter();
        } else {
            mealsByName();
        }
        randMeal();
    }, [match]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-1">
                    <div className="d-flex flex-column sticky-top mt-3">
                        {alphabet.map(symbol => {
                            return <Link key={symbol} className="mx-2" to={`/the-meal-db/${symbol}`}>{symbol}</Link>
                        })}
                    </div>
                </div>
                <div className="col-8">
                    <div className="row">
                        <form className="form-inline  mx-auto" onSubmit={formSubmit}>
                            <div className="form-group mx-sm-3 mb-2">
                                <input type="text" className="form-control" id="mealSearch" name="mealSearch" placeholder="Search by name" />
                            </div>
                            <button type="submit" className="btn btn-primary mb-2"><FaSearch></FaSearch></button>
                        </form>
                    </div>
                    <div className="row">
                        {(meals ?? []).map((meal) => {
                            return <Meal key={meal.idMeal} meal={meal}></Meal>
                        })}
                    </div>
                </div>
                <div className="col-3">
                    <div className="sticky-top">
                        <h3 className="text-right">Random meal</h3>
                        <RandMeal meal={randomMeal}></RandMeal>
                    </div>
                </div>
            </div>
        </div>
    )
}
