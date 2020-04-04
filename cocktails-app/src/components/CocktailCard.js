import React from 'react';
import './CocktailCard.scss';
export class CocktailCard extends React.Component {
    constructor(props) { 
        super(props);
    }
    onTitleClick(){
        console.log('on title click');
    }

    onImageClick(){
        console.log('on image click');
    }
    render() {
        return (
            <div className="Cocktail-card">
                <img className="Cocktail-card-image" 
                src={this.props.drink.strDrinkThumb}
                 alt="no image found"
                onClick={(this.onImageClick)} 
                 ></img>
                <div className="Cocktail-card-title"
                onClick={this.onTitleClick}
                >
                    <div className="Cocktail-card-title-text">
                        {this.props.drink.strDrink}
                    </div>
                </div>
            </div>
        )
    }
}