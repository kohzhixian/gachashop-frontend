import {Link} from "react-router-dom";
import classes from '../css/GenreList.module.css'

function GenreList(){
    return (
      <>
        <div className={classes.sidelist}>
          <ul>
            <li className={classes.first_sub_list}>
              <Link to="/gachashop/action" className={classes.genre_link}>
                Action
              </Link>
            </li>
            <li className={classes.sub_list}>
              <Link to="/gachashop/adventure" className={classes.genre_link}>
                Adventure
              </Link>
            </li>
            <li className={classes.sub_list}>
              <Link to="/gachashop/rpg" className={classes.genre_link}>
                Rpg
              </Link>
            </li>
            <li className={classes.sub_list}>
              <Link to="/gachashop/openworld" className={classes.genre_link}>
                Open World
              </Link>
            </li>
            <li className={classes.sub_list}>
              <Link to="/gachashop/puzzle" className={classes.genre_link}>
                Puzzle
              </Link>
            </li>
            <li className={classes.sub_list}>
              <Link to="/gachashop/towerdefense" className={classes.genre_link}>
                Tower Defense
              </Link>
            </li>
            <li className={classes.last_sub_list}>
              <Link to="/gachashop/visualnovel" className={classes.genre_link}>
                Visual Novel
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
}

export default GenreList;