import React from 'react';
import './MainPage.scss';
import { AlcoholicCategory } from '../Categories/AlcoholicCategory';
import { NonAlcoholicCategory } from '../Categories/NonAlcoholicCategory';
import { OrdinaryCategory } from '../Categories/OrdinaryCategory';
import { ChampagneFluteCategory } from '../Categories/ChampagneFluteCategory';
import { CocktailGlassCategory } from '../Categories/CocktailGlassCategory';

export class MainPage extends React.Component {
    render() {
        return (
            <div className="Main-page">
                <div className="Main-page-search-input">
                    <input></input>
                </div>
                <div className="Main-page-cocktail-list">
                    <AlcoholicCategory addUnavailable={true}></AlcoholicCategory>
                    <NonAlcoholicCategory addUnavailable={true}></NonAlcoholicCategory>
                    <OrdinaryCategory addUnavailable={true}></OrdinaryCategory>
                    <CocktailGlassCategory addUnavailable={true}></CocktailGlassCategory>
                    <ChampagneFluteCategory addUnavailable={true}></ChampagneFluteCategory>
                </div>
            </div>
        );
    }
}