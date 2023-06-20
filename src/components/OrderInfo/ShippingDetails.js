import React from "react";
import classes from "../../components/OrderInfo/ShippingDetails.module.css"

const ShippingDetails = props => {
    return (
        <div className={classes.shippingDetails}>
          <p>Shipping info here</p>
          <p>Address: {props.address}</p>
          <p>Name: {props.name}</p>
          <p>Email address: {props.email}</p>
          <p>Total Amount: ${props.totalAmount}</p>
          <button>Click here to pay</button>
        </div>
    )
}

export default ShippingDetails;