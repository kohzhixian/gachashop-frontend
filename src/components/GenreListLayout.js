import classes from '../css/GenreListLayout.module.css'
import GenreList from './GenreList';
import GameCard from './GameCard';
function GenreListLayout(){
    return(
        <div className={classes.parent}>
            <div className={classes.firstChild}>
                <GenreList />
            </div>
            <div className={classes.secondChild}>
                <div className={classes.genre_type}>
                    <h2 className={classes.genre_header}>GENRE: </h2>
                </div>
                <div className={classes.genre_content}>
                    <GameCard />
                    
                </div>
            </div>
        </div>
    )
}

export default GenreListLayout;