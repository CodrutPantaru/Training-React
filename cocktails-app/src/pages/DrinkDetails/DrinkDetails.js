import React, { useState, useEffect } from 'react';
import './DrinkDetails.scss';
import Axios from 'axios';
import {Button} from '@material-ui/core';

function DrinkDetails(props) {
    const [drink, setDrink] = useState({});

    useEffect(() => {
        Axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + props.match.params.id).then(res => {
            setDrink(res.data.drinks[0])
        });
    },[props.match])

        return <div className="wrapper">
            <div className="drink-details">
                <div className="drink-details-title">
                    {drink.strDrink}
                </div>
                <div className="drink-details-image">
                    <img alt="something went wrong"
                    src={drink.strDrinkThumb}>
                    </img>
                </div>
            </div>
            <Button className="back-button" variant="contained" color="primary" onClick={()=> props.history.goBack()}> Go Back </Button>
        </div>
}

export default DrinkDetails;