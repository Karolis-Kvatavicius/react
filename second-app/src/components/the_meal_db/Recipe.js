import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import "react-modal-video/scss/modal-video.scss";
import { FaYoutube } from 'react-icons/fa';
import getVideoId from 'get-video-id';
import { useHistory } from "react-router-dom";

export default function Recipe({ match }) {

    const [meal, setMeals] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const [videoId, setVideoId] = useState('');
    const [recipeIngredients, setIngredients] = useState([]);
    const history = useHistory();


    const mealById = async () => {
        const fetchedMeal = await axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`);
        setMeals(...fetchedMeal.data.meals);
        setVideoId(getVideoId(fetchedMeal.data.meals[0].strYoutube));
        setIngredients(getIngredients(fetchedMeal.data.meals[0]));
        console.log(fetchedMeal.data.meals);
    }

    const getIngredients = (object) => {
        let i = Object.entries(object).filter((prop) => {
            if (prop[0].match(/^strIngredient.*$/)) {
                return prop[1];
            }
        });

        console.log(i);
        let m = Object.entries(object).filter((prop) => {
            if (prop[0].match(/^strMeasure.*$/)) {
                return prop[1];
            }
        });
        let im = [];
        for (let index = 0; index < i.length; index++) {
            let ingredientImage = `https://www.themealdb.com/images/ingredients/${i[index][1]}-Small.png`;
            im.push([i[index][1], m[index][1], ingredientImage]);
        }
        return im;
    }

    const goToPreviousPath = () => {
        history.goBack()
    }

    useEffect(() => {
        mealById();
    }, [match]);

    return (
        <div className="container">
            <div className="row mb-5">
                <Link className="col-12" onClick={goToPreviousPath}>Back</Link>
                <h2 className="col-12">{meal.strMeal}
                    <React.Fragment>
                        <ModalVideo channel='youtube' videoId={videoId.id} isOpen={isOpen} onClose={() => setOpen(false)}></ModalVideo>
                        <button className="btn" onClick={() => setOpen(true)}><FaYoutube size="50px" color="red" /></button>
                    </React.Fragment>
                </h2>
                <div className="col-6">
                    <img className="img-fluid" style={{ maxHeight: "350px" }} src={meal.strMealThumb} alt="meal photo" />
                    <div style={{ maxWidth: "350px" }}>
                        <h4 className="my-3">Ingredients</h4>
                        <ul className="list-group">
                            {recipeIngredients.map((ingredient, index) => (

                                <li className="list-group-item" key={index}>
                                    <Link to={`/the-meal-db/ingredient/${ingredient[0]}`}>
                                        <img src={ingredient[2]}></img>
                                    </Link> {ingredient[0] + " - " + ingredient[1]}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-6">
                    <h4 className="mb-3">Preparation</h4>
                    <p>{meal.strInstructions}</p>
                </div>
            </div>
        </div>
    )
}
