import classes from '../css/GameCard.module.css';
import epicseven from '../Images/epic seven.jpg';

const GameCard = (props) => {
  let { gameName, gameGenre } = props;

  // to be removed
  gameName = 'Epic Seven';
  gameGenre = 'Action';

  return (
    <div className={classes.gamecard_div}>
      <div className={classes.img_div}>
        <img className={classes.game_image} src={epicseven} alt="epic seven" />
      </div>
      <div className={classes.game_description}>
        <p>
          <b>Game Name: {gameName}</b>
        </p>
        <p>
          <b>Genre: {gameGenre}</b>
        </p>
      </div>
    </div>
  );
};

export default GameCard;
