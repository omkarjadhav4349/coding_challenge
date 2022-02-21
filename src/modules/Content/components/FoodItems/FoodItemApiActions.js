import {
    foodItems,
    clearFoodItems
} from "./FoodItemActions";

 export const storeFoodItems = (data) => {
    return dispatch => {
        dispatch(foodItems(data));
    };
};

export const clearFoodItemsRequest = () => {
    return dispatch => {
        dispatch(clearFoodItems());
    };
};