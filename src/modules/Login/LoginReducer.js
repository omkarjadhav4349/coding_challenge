import {
    LOG_IN
} from './LoginActions';

const initialState = {
    loggedInUser:null
};

/**
 * LogIn reducer to update the part of state of the application
 * @param state: Current state value
 * @param action: action received
 * @returns {*} current updated state value
 * @constructor
 */

const LogIn = (state = initialState, action) => {

    switch (action.type) {

        case LOG_IN:

            return Object.assign({}, state, {
                loggedInUser: action.user
            });

        default:
            return state;

    }
};

export default LogIn;
