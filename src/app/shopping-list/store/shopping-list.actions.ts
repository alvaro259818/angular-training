import { Action } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredient.model";


export const ADD_INGREDIENT = "[Shopping List] Add Ingredient"
export const ADD_INGREDIENTS = "[Shopping List] Add Ingredients"
export const START_EDIT = "[Shopping List] Start Edit Ingredient"
export const UPDATE_INGREDIENT = "[Shopping List] Update Ingredient"
export const STOP_EDIT = "[Shopping List] Stop Edit Ingredient"
export const DELETE_INGREDIENT = "[Shopping List] Delete Ingredient"

export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT

    constructor(public payload: Ingredient){}

}

export class AddIngredients implements Action {
    readonly type = ADD_INGREDIENTS

    constructor(public payload: Ingredient[]){}

}

export class StartEdit implements Action {
    readonly type = START_EDIT

    constructor(public payload: number){}
}

export class UpdateIngredient implements Action {
    readonly type = UPDATE_INGREDIENT

    constructor(public payload: Ingredient){}
}

export class StopEdit implements Action {
    readonly type = STOP_EDIT
}

export class DeleteIngredient implements Action {
    readonly type = DELETE_INGREDIENT
}

export type ShoppingListActions = 
    AddIngredient | 
    AddIngredients | 
    StartEdit | 
    UpdateIngredient | 
    StopEdit |
    DeleteIngredient
