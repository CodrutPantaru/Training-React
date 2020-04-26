import React from 'react';
import './CocktailCard.scss';
import { Redirect } from 'react-router-dom';

export class CocktailCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navigateFromImage: false,
            navigateFromTitle: false
        }
    }
    onImageClick = () => {
        this.setState({ navigateFromImage: true })
    }

    onTitleClick = () => {
        this.setState({ navigateFromTitle: true });
    }

    render() {
        return (
            <div className="Cocktail-card">
                {this.state.navigateFromImage ?
                    <Redirect push to={this.props.path + '/' + this.props.drink.idDrink}></Redirect> :
                    <img className="Cocktail-card-image"
                        alt="something went wrong"
                        src={this.props.drink.strDrinkThumb}
                        onClick={this.onImageClick}
                    ></img>}
                {
                    this.state.navigateFromTitle ?
                        <Redirect to="/"></Redirect> :
                        <div className="Cocktail-card-title"
                            onClick={this.onTitleClick}
                        >
                            <div className="Cocktail-card-title-text">
                                {this.props.drink.strDrink}
                            </div>
                        </div>
                }

            </div>
        )
    }
}