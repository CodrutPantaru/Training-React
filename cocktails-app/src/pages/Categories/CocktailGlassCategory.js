import { CocktailCategory } from "../../components/CategoryLayout/CocktailCategory";

export class CocktailGlassCategory extends CocktailCategory{
    constructor(props){
        super(props);
        this.state = {
            drinks: [],
            api: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass',
            name: 'Cocktail glass',
            path: '/cocktail-glass'
        }
    }
}