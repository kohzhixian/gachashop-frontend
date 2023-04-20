import { Fragment, useContext, useEffect, useState } from "react";
import GameCard from "../components/Game/GameCard";
import GenreList from "../components/GenreList";
import classes from "../css/GenreListLayout.module.css";
import Header from "../components/Layout/Header";
import CartContext from "../store/CartContext";
import Cart from "../components/Cart/Cart";
import { useParams } from "react-router-dom";

const Genre = () => {
  const showCartCtx = useContext(CartContext);
  const [availableGames, setAvailableGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const {genre} = useParams();
  const GENRE = genre.charAt(0).toUpperCase() + genre.slice(1);
  useEffect(() => {
    const sendRequest = async() => {
      setIsLoading(true);
      try{
        const response = await fetch(`http://localhost:4000/api/genres/${GENRE}`);
        const responseData = await response.json();
        if(!response.ok){
          throw new Error(responseData.message);
        }
        setAvailableGames(responseData.games);
      }catch(err){
        setError(err.message);
      }
      setIsLoading(false);
      
    }
    sendRequest();
    
  }, [GENRE]);


  if (isLoading) {
    return (
      <section className={classes.GamesLoading}>
        <p>LOADING...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.GamesError}>
        <p>{error}</p>
      </section>
    );
  }
  return (
    <Fragment>
      {showCartCtx.cartIsShown && <Cart />}
      <Header />
      <div className={classes.parent}>
        <div className={classes.firstChild}>
          <GenreList />
        </div>
        <div className={classes.secondChild}>
          <div className={classes.genre_type}>
            <h2 className={classes.genre_header}>GENRE: {genre} </h2>
          </div>
          <div className={classes.genre_content}>
            {availableGames.map((game, key) => (
              <GameCard
                key={key}
                id={game._id}
                img={game.image_url}
                game_name={game.game_name}
                genre={game.genre}
                price={game.price.toFixed(2)}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Genre;

