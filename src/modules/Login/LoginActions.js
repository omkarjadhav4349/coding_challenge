 // Export Constants
 export const LOG_IN = 'LOG_IN';

 
 /**
  * Action called after log in
  */
 export const LogIn = (data) => {
     return {
         type: LOG_IN,
         user: data,
     };
 }
 