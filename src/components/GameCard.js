import classes from '../css/GameCard.module.css';
import epicseven from '../Images/epic seven.jpg';

const GameCard = (props) => {
  let { gameName, gameGenre } = props;



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
      </div>
    </div>
  );
};

export default GameCard;
