import React, {useContext} from "react";
import CartIcon from "./CartIcon";
import CartContext from "../../store/CartContext";

import classes from "./CartButton.module.css";

const CartButton = props => {

    const cartCtx = useContext(CartContext);

    //transform an array of data into a single value
    const noOfCartItems = cartCtx.items.reduce((currNum, item)=> {
        return currNum + item.amount;
    }, 0) 
    return <button className={classes.button} onClick={cartCtx.openCart}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {noOfCartItems}
        </span>
    </button>
}

export default CartButton;