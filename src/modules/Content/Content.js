import React from 'react';
import { connect } from 'react-redux';
import './Content.css'
import FoodAppPage from './components/FoodAppPage/FoodAppPage';
import Login from '../Login/Login';
import Foodtem from './components/FoodItems/Foodtem';
import Checkout from '../Checkout/Checkout';
import { Route, Routes } from "react-router-dom";
import {Navigate} from "react-router-dom";

/**
 * Component to render Content view
 * @returns {JSX.Element}
 * @constructor
 */
const Content = ({ loggedInUser}) => {
    
    return (
        <>
        {
            loggedInUser
            ?
            <Routes>
                <Route path='/' element={<FoodAppPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/menu' element={<Foodtem />} />
                <Route path='/checkout' element={<Checkout />} />
            </Routes>
            :
            <Routes>
                <Route path='/' element={<FoodAppPage />} />
                <Route path="/menu" element={<Navigate replace to="/" />} />
                <Route path="/checkout" element={<Navigate replace to="/" />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        }
        </>
    );
};
const mapStateToProps = (state) => {
    return {
        loggedInUser:state.LOG_IN.loggedInUser
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Content);
