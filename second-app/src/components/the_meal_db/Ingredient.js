import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'bootstrap';

export default function Ingredient({ match }) {
    const [ingredient, setIngredient] = useState([]);
    const history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }

    const allIngredients = async () => {
        const fetchedIngredients = await axios(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
        let filteredIngredient = fetchedIngredients.data.meals.filter((ingredient) => ingredient.strIngredient.toLowerCase() === match.params.name.toLowerCase());
        console.log(filteredIngredient);
        setIngredient(...filteredIngredient);
    }

    useEffect(() => {
        allIngredients();
    }, [match]);

    return (
        <div className="container">
            <div className="row mb-5">
                <Link className="col-12" onClick={goToPreviousPath}>Back</Link>
                <div className="col">
                    <h2>{ingredient.strIngredient}</h2>
                    <p>{ingredient.strDescription ?? ""}</p>
                    <Link className="btn btn-primary" to={`/the-meal-db/main-ingredient/${ingredient.strIngredient}`}>Check meals with this ingredient</Link>
                </div>
            </div>
        </div>
    )
}
