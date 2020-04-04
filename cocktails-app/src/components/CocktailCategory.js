import React from 'react';
import './CocktailCategory.scss';
import axios from 'axios';
import { CocktailCard } from './CocktailCard';

export class CocktailCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: []
        }
    }

    componentDidMount() {
        axios.get(this.props.cocktail.api).then(res => {
            this.setState({
                drinks: res.data.drinks
            })
        })
    }
    onImageClick(){
        console.log(test);
    }

    render() {
        return (
            <div className="Cocktail-category">
                <div className="Cocktail-category-header">
                    {this.props.cocktail.name}
                </div>
                <div className="Cocktail-list">
                    {this.state.drinks.map(drink => <CocktailCard key={drink.idDrink} drink={drink} onImageClick={this.onImageClick}></CocktailCard>)}
                </div>
            </div>
        );
    }
}