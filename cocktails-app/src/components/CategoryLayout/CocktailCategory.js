import React, { useState, useEffect } from 'react';
import './CocktailCategory.scss';
import axios from 'axios';
import CocktailCard from '../Card/CocktailCard';

function CocktailCategory(props) {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        if (!props.drinks) {
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${props.api}`).then(res => {
                setDrinks(res.data.drinks);
            })
        }else {
            setDrinks(props.drinks);
        }
    }, [props.api, props.drinks])

    return (
        <div className="Cocktail-category">
            <div className="Cocktail-category-header">
                {props.name}
            </div>
            <div className="Cocktail-list">
                {drinks.map(drink => <CocktailCard key={drink.idDrink} {...{ drink: drink, path: props.path, }}></CocktailCard>)}
            </div>
        </div>
    );
}

export default CocktailCategory;