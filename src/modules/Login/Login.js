import { Button, Grid, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './Login.css'
import {
    logInRequest
} from './LoginApiActions'
import logInCredentials from '../logInCredentials.json'
import { useNavigate } from 'react-router-dom'


/**
 * Component to render Login page view
 * @returns {JSX.Element}
 * @constructor
 */
const Login = ({logIn }) => {
    const navigate = useNavigate()

    const [userName,setUserName] = useState(null)
    const [password,setPassword] = useState(null)
    const logInActionHandler = () => {
        let useDetails = {
            userName:userName,
            password:password
        }
        let findUserNameIndex = logInCredentials.findIndex((user)=>user.userName === userName)
        let findPasswordIndex = logInCredentials.findIndex((user)=>user.password === password)

        if(findUserNameIndex > -1 && findPasswordIndex > -1)
        {
            logIn(useDetails)
            navigate('/')
        } else {

        }
    }

    return (
        <>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="login-page-main-grid">
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    <Grid>
                        <TextField 
                            label="Username"
                            value={userName}
                            onChange={(e)=>{
                                setUserName(e.target.value)
                            }}
                        />
                    </Grid>
                    <Grid className='login-btn'>
                        <TextField 
                            type="password"
                            label="Password"
                            value={password}
                            onChange={(e)=>{
                                setPassword(e.target.value)
                            }}
                        />
                    </Grid>
                    <Grid className='login-btn'>
                        <Button color='primary' variant='outlined' onClick={()=>{
                            logInActionHandler()
                        }}
                        disabled={userName!==null && password!==null ? false: true}
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};
const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: async (data) => {
            return dispatch(await logInRequest(data))
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
