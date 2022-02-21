 // Export Constants
 export const FOOD_ITEMS = 'FOOD_ITEMS';
 export const CLEAR_FOOD_ITEMS = 'CLEAR_FOOD_ITEMS';


 
 /**
  * Action called after log in
  */
 export const foodItems = (data) => {
     return {
         type: FOOD_ITEMS,
         foodItems: data,
     };
 }
 
  /**
  * Action called checkout 
  */
   export const clearFoodItems = () => {
    return {
        type: CLEAR_FOOD_ITEMS,
    };
}
