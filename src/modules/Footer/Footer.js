import React from 'react';
import { connect } from 'react-redux';
import './Footer.css'
import { Box, Typography } from '@material-ui/core';


/**
 * Component to render Footer View
 * @returns {JSX.Element}
 * @constructor
 */
const Footer = ({ }) => {

    return (
        <Box component='footer' className='login-footer'>
            <Typography className='login-footer-text'>
                &copy; Food's Restaurant {new Date().getFullYear()}
            </Typography>
        </Box>
    );
};
const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);
