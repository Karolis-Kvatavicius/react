import React from 'react'
import { Link } from 'react-router-dom'

export default function RandMeal({ meal }) {

    return (
        <div className="d-flex justify-content-center">
            <div className="card my-4" style={{ maxWidth: '10rem' }}>
                <img className="card-img-top" src={meal.strMealThumb} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{meal.strMeal}</h5>
                    <p>{meal.strTags ? `Tags: ${meal.strTags}` : ""}</p>
                    <Link className="btn btn-primary" to={`/the-meal-db/recipe/${meal.idMeal}`}>View Recipe</Link>
                </div>
            </div>
        </div>
    )
}