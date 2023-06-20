import { useContext } from "react";
import CartContext from "../../store/CartContext";
import AddGameForm from "./AddGameToCart";
import classes from "./GameCard.module.css";

const GameCard = (props) => {
  const cartCtx = useContext(CartContext);

  // const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.game_name,
      amount: amount,
      price: props.price
    });
  }
  return (
    <div className={classes.gamecard_div}>
      <div className={classes.img_div}>
        <img className={classes.game_image} src={props.img} alt="game_image" />
      </div>
      <div className={classes.game_description}>
        <p>
          <b>Game Name: {props.game_name}</b>
        </p>
        <p>
          <b>Genre: {props.genre}</b>
        </p>
        <p>
          <b>Price: ${props.price}</b>
        </p>
      </div>
      <AddGameForm onAddToCart={addToCartHandler}/>
    </div>
  );
};

export default GameCard;
