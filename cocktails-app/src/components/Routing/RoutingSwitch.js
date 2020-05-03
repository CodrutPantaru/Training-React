import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import DrinkDetails from '../../pages/DrinkDetails/DrinkDetails';
import MainPage from '../../pages/MainPage/MainPage';
import ALCOHOLIC_CATEGORY from '../../constants/AlcoholicConstant';
import CocktailCategory  from '../CategoryLayout/CocktailCategory';
import NON_ALCOHOLIC_CATEGORY from '../../constants/NonAlcoholicConstant';
import ORDINARY_CATEGORY from '../../constants/OrdinaryConstant';
import COCKTAIL_GLASS_CATEGORY from '../../constants/CocktailGlassCategory';
import CHAMPAGNE_FLUTE_CATEGORY from '../../constants/ChampagneFluteConstant';

export function RoutingSwitch(){


    return (
        <Switch>
        <Route path="/alcoholic/:id" component={DrinkDetails}></Route>
        <Route path="/alcoholic" component={() => <CocktailCategory {...ALCOHOLIC_CATEGORY}></CocktailCategory> }></Route>
       
        <Route path="/non-alcoholic/:id" component={DrinkDetails}></Route>
        <Route path="/non-alcoholic" component={() => <CocktailCategory {...NON_ALCOHOLIC_CATEGORY}></CocktailCategory> }></Route>
        
        <Route path="/ordinary/:id" component={DrinkDetails}></Route>
        <Route path="/ordinary" component={() => <CocktailCategory {...ORDINARY_CATEGORY}></CocktailCategory> }></Route>   
        
        <Route path="/cocktail-glass/:id" component={DrinkDetails}></Route>
        <Route path="/cocktail-glass" component={() => <CocktailCategory {...COCKTAIL_GLASS_CATEGORY}></CocktailCategory> }></Route>
        
        <Route path="/champagne-flute/:id" component={DrinkDetails}></Route>
        <Route path="/champagne-flute" component={() => <CocktailCategory {...CHAMPAGNE_FLUTE_CATEGORY}></CocktailCategory> }></Route>
        <Route exact path="/" component={MainPage}></Route>
      
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    )
}