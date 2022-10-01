import classes from '../css/GameCard.module.css'
import epicseven from '../Images/epic seven.jpg'

function GameCard(){
    return(
        <div className={classes.gamecard_div}>
            <div className={classes.img_div}>
                <img className={classes.game_image} src={epicseven} alt="epic seven"/>
            </div>
            <div className={classes.game_description}>
                <p><b>Game Name: EPIC SEVEN</b></p>
                <p><b>Genre: ACTION</b></p>
            </div>
        </div>
    )
}

export default GameCard;