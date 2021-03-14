import React from 'react'
import { Link } from 'react-router-dom'

export default function Meal({ meal }) {

    return (
        <div className="col-4">
            <div className="card my-3">
                <img className="card-img-top" src={meal.strMealThumb} alt="Card image cap" />
                <div className="card-body">
                    <h5 style={{ minHeight: "4em" }} className="card-title">{meal.strMeal}</h5>
                    <p style={{ minHeight: "5em" }}>{meal.strTags ? `Tags: ${meal.strTags}` : ""}</p>
                    <Link className="btn btn-primary" to={`/the-meal-db/recipe/${meal.idMeal}`}>View Recipe</Link>
                </div>
            </div>
        </div>
    )
}
