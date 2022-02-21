import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './Foodtem.css'
import { Box, Button, Card, Grid, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom'
import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';
import feeds from '../../../feeds.json'
import Hamburger from '../../../../assets/burger.jpeg'
import Fries from '../../../../assets/fries.jpeg'
import Coke from '../../../../assets/coke.jpeg'
import Pepsi from '../../../../assets/pepsi.jpeg'
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import {storeFoodItems} from './FoodItemApiActions'


/**
 * Component to render Fooditem view
 * @returns {JSX.Element}
 * @constructor
 */
const Foodtem = ({ loggenInUser, foodItemStore, foodItems }) => {
    const navigate = useNavigate()
    const images = [Hamburger,Fries,Coke,Pepsi]
    const [isoldPriceIsSmaller,setisOldPriceSmaller] = useState({
        isSmaller:false,
        index:null
    })
    const [isCartEmpty,setIsCartEmpty] = useState(false)
   useEffect(()=>{
        if(images)
        {
            let data = Object.assign([], feeds)
            images.map((img,imgIndex)=>{
                data.map((item,itemIndex)=>{
                    if(itemIndex===imgIndex)
                    {
                        item.image = img
                        item.oldPrice = item.price
                    } else {}
                })
            })
            foodItemStore(data)
        } else {}
   },[])

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
        let filteredData = data.filter((item)=> item.price > item.oldPrice)
        if(filteredData&&filteredData.length === 0)
        {
            setIsCartEmpty(false)
        } else {}
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
    
    return (
        <>
            <Header />
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='outer-grid'>
                <Grid container className='inner-grid'>
                    {
                       foodItems && foodItems.map((item,itemIndex) => {
                           if( item.price > item.oldPrice)
                           {
                                if(!isoldPriceIsSmaller.isSmaller)
                                {
                                    setisOldPriceSmaller({
                                        isSmaller:true,
                                        index:itemIndex
                                    })
                                } else {}
                                if(!isCartEmpty)
                                {
                                    setIsCartEmpty(true)
                                } else {}
                           } else {}
                            return (
                                <Card className='item-card' key={itemIndex}>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="item-main-grid">
                                        <Grid container direction='row'>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <img src={item.image} className="image-style"/>
                                                <Box className='meta-info-style'>
                                                    <Typography className='item-name-style'>{item.name}</Typography>
                                                    <Typography className='item-price-style'>Price: {item.oldPrice}</Typography>
                                                    {
                                                        item.price > item.oldPrice
                                                        ?
                                                        <>
                                                            <Typography className='item-price-style'>Total: {item.price/item.oldPrice}</Typography>
                                                            <Typography className='item-price-style'>Cost(INR): {item.price}</Typography>
                                                        </>
                                                        :
                                                        <></>
                                                    }
                                                </Box>
                                                <Box className={isCartEmpty ? item.price > item.oldPrice ? 'item-action-style-box-on-price-small' : 'action-box-style' :'item-action-style-box'}>
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
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Card>
                            )
                        })
                    }
                </Grid>
            </Grid>
            <Footer />
        </>
    );
};
const mapStateToProps = (state) => {
    return {
        loggenInUser: state.LOG_IN.loggedInUser,
        foodItems:state.FOOD_ITEM.items
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        foodItemStore: async (data) => {
            return dispatch(await storeFoodItems(data))
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Foodtem);
