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
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://gachashop-f35b8-default-rtdb.asia-southeast1.firebasedatabase.app/AvailableGenres.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const responseData = await response.json();

      // const loadedGames = [];
      const genresMap = {};
      for (const key in responseData) {
        genresMap[responseData[key].genre] = [...responseData[key].games];
      }

      if (!genresMap[genre]) {
        setError("No available games");
      } else {
        setAvailableGames(genresMap[genre]);
      }

      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, [genre]);

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
            {availableGames.map((game) => (
              <GameCard
                key={game.id}
                id={game.id}
                img={game.image_url}
                game_name={game.game_name}
                genre={genre}
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

// const { genre } = useParams();

//   const [games, setGames] = useState();

//   useEffect(() => {
//     // Simulate data coming back from backend
//     const GAMES_FROM_BACKEND = {
//       action: [
//         {
//           gameName: 'Epic 7',
//           gameGenre: 'Action',
//         },
//       ],
//       adventure: [],
//       openworld: [],
//       puzzle: [],
//       rpg: [
//         {
//           gameName: 'MapleStory',
//           gameGenre: 'RPG',
//         },
//       ],
//       towerdefense: [],
//       visualnovel: [],
//     };
//     setGames(GAMES_FROM_BACKEND[genre.toLowerCase()]);
//   }, [genre]);

//   if (!games) {
//     return <div>Url error....</div>;
//   }

//   return (
//     <div className={classes.parent}>
//       <div className={classes.firstChild}>
//         <GenreList />
//       </div>
//       <div className={classes.secondChild}>
//         <div className={classes.genre_type}>
//           <h2 className={classes.genre_header}>GENRE: {genre.toUpperCase()}</h2>
//         </div>
//         <div className={classes.genre_content}>
//           {games.map((game, idx) => (
//             <GameCard
//               key={idx}
//               gameName={game.gameName}
//               gameGenre={game.gameGenre}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
