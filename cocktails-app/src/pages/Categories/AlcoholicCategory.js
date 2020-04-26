import { CocktailCategory } from "../../components/CategoryLayout/CocktailCategory";

export class AlcoholicCategory extends CocktailCategory{
    constructor(props){
        super(props);
        this.state = {
            drinks: [],
            api: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic',
            name: 'Alcoholic',
            path: '/alcoholic'
        }
    }
}