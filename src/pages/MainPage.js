import classes from "../css/MainPage.module.css";
import Tabs from "../components/Tab";
import GenreList from "../components/GenreList";
import Cart from "../components/Cart/Cart";
import Header from "../components/Layout/Header";
import { Fragment, useContext } from "react";
import CartContext from "../store/CartContext";


function MainPage() {

  const showCartCtx = useContext(CartContext);

  return (
    <Fragment>
      {showCartCtx.cartIsShown && <Cart />}
      <Header />
      <div className={classes.main_content}>
        <div className={classes.middle_section}>
          <div className={classes.middle_firstchild}>
            <GenreList />
          </div>
          <div className={classes.middle_secondchild}>
            <div className={classes.tab_div}>
              <Tabs />
            </div>
          </div>
        </div>
        <div className={classes.bottom_section}>
          <div className={classes.bottom_firstchild}>
            <img
              className={classes.product_image}
              src='/Images/testimage4.png'
              alt="testimage4"
            />
          </div>
          <div className={classes.bottom_secondchild}>
            <img
              className={classes.product_image}
              src='/Images/testimage5.png'
              alt="testimage5"
            />
          </div>
          <div className={classes.bottom_thirdchild}>
            <img
              className={classes.product_image}
              src='/Images/testimage6.png'
              alt="testimage6"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MainPage;
