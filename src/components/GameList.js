// import classes from "../css/GameList.module.css";
import Card from "./UI/Card";
import classes from '../css/GameList.module.css';

const GameList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No Game found.</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className={classes.gameList_ul}>
      {props.items.map((game, index) => (
        <li key={index}>
          {game.game_name},&nbsp;&nbsp;&nbsp;&nbsp;{game.genre}, ${game.price}&nbsp;&nbsp;&nbsp;&nbsp;{game._id}
        </li>
      ))}
    </ul>
  );
};

export default GameList;
