import classes from "../../css/MainPage.module.css";
import { FaSearch } from "react-icons/fa";
import CartButton from "../Cart/CartButton";
import NavBar from "../UI/NavBar";
import { Fragment, useContext } from "react";
import CartContext from "../../store/CartContext";

const Header = (props) => {

  const showCartCtx = useContext(CartContext);
  return (
    <Fragment>
      <div className={classes.top_section}>
        <div className={classes.logo}>GACHASHOP</div>
        <div className={classes.search_container}>
          <div className={classes.search_bar}>
            <input type="text" placeholder="Search..."></input>
          </div>
          <div className={classes.search_button}>
            <FaSearch size={35} />
          </div>
          <div className={classes.msg_icons}>
            <div className={classes.welcomeMsg}>WELCOME NAME</div>
            <div className={classes.shoppingIcons}>
              <CartButton onClick={showCartCtx.openCart} />
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </Fragment>
  );
};

export default Header;
