import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './Checkout.css'
import { Box, Button, Card, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


/**
 * Component to render Checkout view
 * @returns {JSX.Element}
 * @constructor
 */
const Checkout = ({loggenInUser }) => {
    const navigate = useNavigate()


    return (
        <>
            <Header />
                <Box className='checkout-box'>
                    <Card className='checkout-card'>
                        <Typography variant='h4' align='center'>Checkout</Typography>
                        <Typography align='left' className='thank-you-text'>Thank you for your order.</Typography>
                    </Card>
                </Box>
            <Footer />
        </>
    );
};
const mapStateToProps = (state) => {
    return {
        loggenInUser:state.LOG_IN.loggedInUser
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout);
