import React from 'react';
import { CocktailCategory } from './CocktailCategory';
import './MainPage.scss';

export class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cocktails: [
                {
                    name: 'Alcoholic',
                    key: 1,
                    api: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
                },
                {
                    name: 'Non-Alcoholic',
                    key: 2,
                    api: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
                },
                {
                    name: 'Ordinary',
                    key: 3,
                    api: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink'
                },
                {
                    name: 'Cocktail glass',
                    key: 4,
                    api: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass'
                },
                {
                    name: 'Champagne flute',
                    key: 5,
                    api: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute'
                }
            ]
        }
    }
    render() {
        return (
            <div className="Main-page">
                <div className="Main-page-search-input">
                    <input></input>
                </div>
                <div className="Main-page-cocktail-list">
                    {this.state.cocktails.map(cocktail => <CocktailCategory key={cocktail.key} cocktail={cocktail}></CocktailCategory>)}
                </div>
            </div>
        );
    }
}