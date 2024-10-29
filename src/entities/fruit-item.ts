export interface INutritions {
    calories: number;
    fat: number;
    sugar: number;
    carbohydrates: number;
    protein: number;
}

export interface IFruitParams {
    name: string;
    id: number;
    family: string;
    order: string;
    genus: string;
    nutritions: INutritions;
}

export class Fruit {
    public name: string;
    public id: number;
    public family: string;
    public order: string;
    public genus: string;
    public nutritions: INutritions;


    constructor({name, id, family, order, genus, nutritions}: IFruitParams) {
        this.name = name;
        this.id = id;
        this.family = family;
        this.order = order;
        this.genus = genus;
        this.nutritions = nutritions;
    }
}