import { CocktailCategory } from "../../components/CategoryLayout/CocktailCategory";

export class OrdinaryCategory extends CocktailCategory{
    constructor(props){
        super(props);
        this.state = {
            drinks: [],
            api: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink',
            name: 'Ordinary',
            path: '/ordinary'
        }
    }
}