import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './FoodAppPage.css'
import { Box, Button, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom'
import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';

/**
 * Component to render FoodAppPage view
 * @returns {JSX.Element}
 * @constructor
 */
const FoodAppPage = ({loggenInUser }) => {
    const navigate = useNavigate()


    return (
        <>
            <Header />
            <Box className='outer-box-style'>
                <Box>
                    <Typography className='welcome-text-style' align='center'>
                        Welcome to Food's
                    </Typography>
                    <Typography className='welcome-text-style' align='center'>Kitchen</Typography>
                </Box>
                <Button size='small' variant='filled' className='go-to-menu-btn'
                    onClick={() => {
                        if(loggenInUser)
                        {
                            navigate('/menu');
                        } else {
                            navigate('/login');
                        }
                    }}
                >
                    Go to menu
                </Button>
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
)(FoodAppPage);
