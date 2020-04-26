import React from 'react';
import { MainPage } from '../../pages/MainPage/MainPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AlcoholicCategory } from '../../pages/Categories/AlcoholicCategory';
import { NonAlcoholicCategory } from '../../pages/Categories/NonAlcoholicCategory';
import { OrdinaryCategory } from '../../pages/Categories/OrdinaryCategory';
import { CocktailGlassCategory } from '../../pages/Categories/CocktailGlassCategory';
import { ChampagneFluteCategory } from '../../pages/Categories/ChampagneFluteCategory';
import { DrinkDetails } from '../../pages/DrinkDetails/DrinkDetails';

export function RoutingSwitch(){
    return (
        <Switch>
        <Route path="/alcoholic/:id" component={DrinkDetails}></Route>
        <Route path="/alcoholic" component={AlcoholicCategory}></Route>
       
        <Route path="/non-alcoholic/:id" component={DrinkDetails}></Route>
        <Route path="/non-alcoholic" component={NonAlcoholicCategory}></Route>
        
        <Route path="/ordinary/:id" component={DrinkDetails}></Route>
        <Route path="/ordinary" component={OrdinaryCategory}></Route>   
        
        <Route path="/cocktail-glass/:id" component={DrinkDetails}></Route>
        <Route path="/cocktail-glass" component={CocktailGlassCategory}></Route>
        
        <Route path="/champagne-flute/:id" component={DrinkDetails}></Route>
        <Route path="/champagne-flute" component={ChampagneFluteCategory}></Route>
        <Route exact path="/" component={MainPage}></Route>
      
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    )
}