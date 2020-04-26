import React from 'react';
import './DrinkDetails.scss';
import Axios from 'axios';
import {Button} from '@material-ui/core';

export class DrinkDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drink: {}
        }
    }

    componentDidMount() {
        Axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + this.props.match.params.id).then(res => {
            this.setState({ drink: res.data.drinks[0] })
        });
    }

    render() {
        return <div className="wrapper">
            <div className="drink-details">
                <div className="drink-details-title">
                    {this.state.drink.strDrink}
                </div>
                <div className="drink-details-image">
                    <img alt="something went wrong"
                    src={this.state.drink.strDrinkThumb}>
                    </img>
                </div>
            </div>
            <Button className="back-button" variant="contained" color="primary" onClick={()=> this.props.history.goBack()}> Go Back </Button>
        </div>
    }
}