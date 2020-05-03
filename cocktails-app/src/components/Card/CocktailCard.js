import React, { useState } from 'react';
import './CocktailCard.scss';
import { Redirect } from 'react-router-dom';

function CocktailCard(props) {

    const [navigateFromImage, setNavigateFromImage] = useState(false);
    const [navigateFromTitle, setNavigateFromTitle] = useState(false);

    const handleNavigationFromImage = () => setNavigateFromImage(true);
    const handleNavigationFromTitle = () => setNavigateFromTitle(true);

        return (
            <div className="Cocktail-card">
                {navigateFromImage ?
                    <Redirect push to={props.path + '/' + props.drink.idDrink}></Redirect> :
                    <img className="Cocktail-card-image"
                        alt="something went wrong"
                        src={props.drink.strDrinkThumb}
                        onClick={handleNavigationFromImage}
                    ></img>}
                {
                    navigateFromTitle ?
                        <Redirect to="/"></Redirect> :
                        <div className="Cocktail-card-title"
                            onClick={handleNavigationFromTitle}
                        >
                            <div className="Cocktail-card-title-text">
                                {props.drink.strDrink}
                            </div>
                        </div>
                }

            </div>
        )
}

export default CocktailCard;