import {
    LogIn
} from "./LoginActions";


/**
 * Server API call log in
 * @returns {function(*)}
 */
 export const logInRequest = (data) => {
    return dispatch => {
        dispatch(LogIn(data));
    };
};