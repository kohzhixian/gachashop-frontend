import {React, Fragment} from "react";
import classes from "../../components/OrderInfo/OrderList.module.css";

const OrderList = props => {
    return (
        <Fragment>
            <li>Game_Name: {props.name}</li>
            <li>Price: ${props.price}</li>
            <li>Quantity: {props.quantity}</li>
            <li>Total Amount: ${props.totalAmount}</li>
            <p>=============================================================================</p>
        </Fragment>
    )
}

export default OrderList;