import {combineReducers} from 'redux';

import LOG_IN from './modules/Login/LoginReducer'
import FOOD_ITEM from './modules/Content/components/FoodItems/FoodItemReducer'

// Combine all reducers into one root reducer
export default combineReducers({
    LOG_IN,
    FOOD_ITEM,
});
