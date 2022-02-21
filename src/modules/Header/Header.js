import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './Header.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RestaurantRoundedIcon from '@material-ui/icons/RestaurantRounded';
import { Badge, Grid } from '@material-ui/core';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import Cart from '../Cart/Cart';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    headerName:{
        marginLeft:'10px'
    }
  }));

  
/**
 * Component to render Action Station Lists and filters view
 * @returns {JSX.Element}
 * @constructor
 */
const Header = ({foodItems }) => {

    const [openCartDialogBox,setOpenCartDialogBox] = useState(false)

    const openCartDialogBoxHandler  = () => {
        setOpenCartDialogBox(!openCartDialogBox)
    }

    const classes = useStyles();
    let cartItemsCount = foodItems && foodItems.filter((item)=>item.price > item.oldPrice)
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <RestaurantRoundedIcon />  <Typography className={classes.headerName}>Food's Restaurant</Typography>
                    </IconButton>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Grid container justifyContent='flex-end'>
                            <Grid className='cart-icon-grid'>
                                {
                                    cartItemsCount&&cartItemsCount.length !==0
                                    ?
                                    <Button color="inherit" onClick={()=>{
                                        openCartDialogBoxHandler()
                                    }}>
                                        <Badge badgeContent={cartItemsCount ? cartItemsCount.length:0} color="error">
                                            <ShoppingCartRoundedIcon style={{color:'black'}}/>
                                        </Badge>
                                    </Button>
                                    :
                                    <></>
                                }
                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            {
                openCartDialogBox
                ?
                <Cart
                open={openCartDialogBox}
                closeDialogBox={()=>{
                    setOpenCartDialogBox(!openCartDialogBox)
                }}
                />
                :
                <></>
            }
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        foodItems:state.FOOD_ITEM.items
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
