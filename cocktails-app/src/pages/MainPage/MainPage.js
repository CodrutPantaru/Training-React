import React from 'react';
import './MainPage.scss';
import ALCOHOLIC_CATEGORY from '../../constants/AlcoholicConstant';
import NON_ALCOHOLIC_CATEGORY from '../../constants/NonAlcoholicConstant';
import ORDINARY_CATEGORY from '../../constants/OrdinaryConstant';
import COCKTAIL_GLASS_CATEGORY from '../../constants/CocktailGlassCategory';
import CHAMPAGNE_FLUTE_CATEGORY from '../../constants/ChampagneFluteConstant';
import CocktailCategory from '../../components/CategoryLayout/CocktailCategory';
import AddCocktail from '../../components/AddCocktail/AddCocktail';

function MainPage() {

    const cocktailCategories = [
        ALCOHOLIC_CATEGORY,
        NON_ALCOHOLIC_CATEGORY,
        ORDINARY_CATEGORY,
        COCKTAIL_GLASS_CATEGORY,
        CHAMPAGNE_FLUTE_CATEGORY
    ]

    return (
        <div className="Main-page">
            <div className="Main-page-search-input">
                <input></input>
            </div>
            <div className="Main-page-cocktail-list">
            <AddCocktail></AddCocktail>
                {
                    cocktailCategories.map(category =>
                        <CocktailCategory {...category}></CocktailCategory>
                    )
                }
            </div>
            
        </div>
    );
}

export default MainPage;