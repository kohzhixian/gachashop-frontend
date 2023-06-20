import classes from "../css/adminPage.module.css";
import AddGameForm from "../components/AddGameForm";
import ShowGames from "../components/ShowGames";
import Cart from "../components/Cart/Cart";
import { Fragment, useContext } from "react";
import Header from "../components/Layout/Header";
import CartContext from "../store/CartContext";
import UpdateGameForm from "../components/UpdateGameFom";
import DeleteGameForm from "../components/DeleteGameForm";

const AdminMainPage = () => {
  const showCartCtx = useContext(CartContext);
  return (
    <Fragment>
      {showCartCtx.cartIsShown && <Cart />}
      <Header />
      <div className={classes.adminPage}>
        <div className={classes.topSection}>
          <div className={classes.topLeft}>
            <AddGameForm />
          </div>
          <div className={classes.topRight}>
            <ShowGames />
          </div>
        </div>
        <div className={classes.bottomSection}>
          <div className={classes.bottomLeft}>
            <UpdateGameForm />
          </div>
          <div className={classes.bottomRight}>
            <DeleteGameForm />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminMainPage;
