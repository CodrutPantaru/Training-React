import React from 'react';
import './CocktailCategory.scss';
import axios from 'axios';
import { CocktailCard } from '../Card/CocktailCard';
import {Fab} from '@material-ui/core';

export class CocktailCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: [],
            name: '',
            api: '',
            path: ''
        }
    }

    componentDidMount() {
        axios.get(this.state.api).then(res => {
            this.setState({
                drinks: res.data.drinks
            })
        })
    }

    render() {
        return (
            <div className="Cocktail-category">
                <div className="Cocktail-category-header">
                    {this.state.name}
                </div>
                <div className="Cocktail-list">
                    {this.state.drinks.map(drink => <CocktailCard key={drink.idDrink} {...{ drink: drink, path: this.state.path, }}></CocktailCard>)}
                </div>
                {this.props.addUnavailable ? null :
                <Fab className="floating-button" variant="round"> Add </Fab>}
            </div>
        );
    }
}