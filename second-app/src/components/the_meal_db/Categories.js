import React from 'react'
import { Link } from 'react-router-dom'

export default function Categories({ categr }) {
    return (
        <div>
            <h4 className="my-3">Categories</h4>
            <ul className="list-group text-center">
                {categr.map((category, index) => (
                    <li className="list-group-item" key={index}>
                        <Link to={`/the-meal-db/category/${category.strCategory}`}>
                            <img className="img-fluid" src={category.strCategoryThumb}></img>
                        </Link> {category.strCategory}</li>
                ))}
            </ul>
        </div>
    )
}
