import React, { useState, useEffect } from 'react';
import './AddCocktail.scss';
import { Fab } from '@material-ui/core';
import AddCocktailDialog from './AddCocktailDialog/AddCocktailDialog';
import CocktailCategory from '../CategoryLayout/CocktailCategory';


function AddCocktail() {
    const [open, setOpen] = useState(false);
    const [savedDrinks, setSavedDrinks] = useState([]);

    const handleClose = (newDrink) => {
        if (newDrink) {
            newDrink.key = Math.floor(Math.random() * 99999);
            savedDrinks.push(newDrink);
            localStorage.setItem('savedDrinks', JSON.stringify(savedDrinks));
            setSavedDrinks(savedDrinks);

        }
        setOpen(false);
    }

    useEffect(() => {
        if (localStorage.getItem('savedDrinks')) {
            setSavedDrinks(JSON.parse(localStorage.getItem('savedDrinks')));
        }
    }, [open])

    return <div className="add-cocktail">
        <CocktailCategory drinks={savedDrinks} name="Added drinks">

        </CocktailCategory>
        <Fab className="floating-button" variant="round" onClick={() => setOpen(true)}> Add </Fab>
        <AddCocktailDialog open={open} onClose={handleClose}></AddCocktailDialog>
    </div>
}

export default AddCocktail;