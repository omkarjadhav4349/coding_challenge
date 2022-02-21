import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './Cart.css'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, Typography } from '@material-ui/core';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import {storeFoodItems} from '../Content/components/FoodItems/FoodItemApiActions'
import { useNavigate } from 'react-router-dom'
import {clearFoodItemsRequest} from '../Content/components/FoodItems/FoodItemApiActions'


/**
 * Component to cart view
 * @returns {JSX.Element}
 * @constructor
 */
const Cart = ({ foodItems, open, closeDialogBox , foodItemStore, clearItemStore}) => {
    const navigate = useNavigate()
    const [isoldPriceIsSmaller,setisOldPriceSmaller] = useState({
        isSmaller:false,
        index:null
    })
    const addItemHandler = (name) => {
        let data = Object.assign([],foodItems)
        let findIndex = data.findIndex((item)=> item.name === name)
        let item = data[findIndex]
        let increment
        if(name === "Hamburger")
        {
            increment = parseInt(item.price) + parseInt(item.oldPrice)
        } else if (name === "Fries") {
            increment = parseInt(item.price) + parseInt(item.oldPrice)
        } else if (name === "Coke") {
            increment = parseInt(item.price) + parseInt(item.oldPrice)
        } else if (name === "Pepsi") {
            increment = parseInt(item.price) + parseInt(item.oldPrice)
        } else {

        }
        data[findIndex].price = increment
        foodItemStore(data)
    }

    const deleteItemHandler = (name) => {
        let data = Object.assign([],foodItems)
        let findIndex = data.findIndex((item)=> item.name === name)
        let item = data[findIndex]
        let decreament
        if(name === "Hamburger")
        {
            decreament = parseInt(item.price) - parseInt(item.oldPrice)
        } else if (name === "Fries") {
            decreament = parseInt(item.price) - parseInt(item.oldPrice)
        } else if (name === "Coke") {
            decreament = parseInt(item.price) - parseInt(item.oldPrice)
        } else if (name === "Pepsi") {
            decreament = parseInt(item.price) - parseInt(item.oldPrice)
        } else {

        }
        data[findIndex].price = decreament
        foodItemStore(data)
        if( data[findIndex].price <= data[findIndex].oldPrice)
        {
            if(isoldPriceIsSmaller.isSmaller)
            {
                setisOldPriceSmaller({
                    isSmaller:false,
                    index:findIndex
                })
            } else {}
        } else {}
    }

    let total =0;
    foodItems && foodItems.map((item)=>{
        if(item.price > item.oldPrice)
        {
            total = total + parseInt(item.price)
        } else {}
    })
    return (
        <div>
            <Dialog
                open={open}
                fullWidth="md"
            >
                <DialogTitle id="alert-dialog-title">Order Summary</DialogTitle>
                <DialogContent>
                    {
                        foodItems && foodItems.map((item)=>{
                            if(item.price > item.oldPrice)
                            {
                                return (
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Grid container alignItems='center'>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Grid container alignItems='center' className='cart-grid'>
                                                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                                        <Typography>{item.name}:</Typography>
                                                    </Grid>
                                                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                                        <Typography>{(item.price/item.oldPrice)-1}</Typography>
                                                    </Grid>
                                                    <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                                                        <Button size='small' variant='filled' className='go-to-menu-btn'
                                                        onClick={()=>{
                                                            addItemHandler(item.name)
                                                        }}
                                                        ><AddRoundedIcon/></Button>
                                                        <Button 
                                                        className={item.price > item.oldPrice ? 'decrement-btn-style d-btn-color':'decrement-btn-style'}
                                                        disabled={item.price > item.oldPrice ? false : true}
                                                        onClick={()=>{
                                                            deleteItemHandler(item.name)
                                                        }}
                                                        ><RemoveRoundedIcon/></Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )
                            } else {}
                        })
                    }
                    <Typography>Total (INR) : {total} </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>{
                        navigate('/checkout')
                        clearItemStore()
                    }} color="primary" className='go-to-menu-btn'>
                        SAVE AND CHECKOUT
                    </Button>
                    <Button onClick={closeDialogBox} color="primary" autoFocus>
                        CANCEL
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        foodItems: state.FOOD_ITEM.items
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        foodItemStore: async (data) => {
            return dispatch(await storeFoodItems(data))
        },
        clearItemStore: async (data) => {
            return dispatch(await clearFoodItemsRequest(data))
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
