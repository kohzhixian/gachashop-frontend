import { Fragment, React, useContext } from "react";
import CartContext from "../store/CartContext";
import OrderList from "../components/OrderInfo/OrderList";
import Cart from "../components/Cart/Cart";
import Header from "../components/Layout/Header";
import classes from "../css/orderInfoPage.module.css";
import ShippingDetails from "../components/OrderInfo/ShippingDetails";

function OrderInfoPage() {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items;
    console.log("total amount", cartCtx.totalAmount);
  return (
    <Fragment>
      {cartCtx.cartIsShown && <Cart />}
      <Header />
      <div className={classes.bodyContent}>
        <div className={classes.cartDetails}>
          <ul className={classes.orderItems_ul}>
            {cartItems.map((item, key) => {
              return (
                <OrderList
                  key={key}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  quantity={item.amount}
                  totalAmount={item.price * item.amount}
                />
              );
            })}
          </ul>
        </div>
        <ShippingDetails 
            totalAmount = {cartCtx.totalAmount}
        />
      </div>
    </Fragment>
  );
}

export default OrderInfoPage;
