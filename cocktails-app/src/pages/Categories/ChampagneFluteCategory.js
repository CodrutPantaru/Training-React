import { CocktailCategory } from "../../components/CategoryLayout/CocktailCategory";

export class ChampagneFluteCategory extends CocktailCategory{
    constructor(props){
        super(props);
        this.state = {
            drinks: [],
            api: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute',
            name: 'Champagne flute',
            path: '/champagne-flute'
        }
    }
}