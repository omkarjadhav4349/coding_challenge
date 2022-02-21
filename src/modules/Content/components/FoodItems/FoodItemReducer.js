import {
    FOOD_ITEMS,
    CLEAR_FOOD_ITEMS
} from './FoodItemActions';

const initialState = {
    items:null
};

/**
 * FoodItems reducer to update the part of state of the application
 * @param state: Current state value
 * @param action: action received
 * @returns {*} current updated state value
 * @constructor
 */

const FoodItems = (state = initialState, action) => {

    switch (action.type) {

        case FOOD_ITEMS:

            return Object.assign({}, state, {
                items: action.foodItems
            });

        case CLEAR_FOOD_ITEMS:

            return Object.assign({}, state, {
                items: null
            });
    
        default:
            return state;

    }
};

export default FoodItems;
