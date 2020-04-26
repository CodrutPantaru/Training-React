import { CocktailCategory } from "../../components/CategoryLayout/CocktailCategory";

export class NonAlcoholicCategory extends CocktailCategory{
    constructor(props){
        super(props);
        this.state = {
            drinks: [],
            api: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic',
            name: 'Non-Alcoholic',
            path: '/non-alcoholic'
        }
    }
}