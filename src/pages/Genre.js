import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GameCard from '../components/GameCard';
import Games from '../data/Game_Data'
import GenreList from '../components/GenreList';
import classes from '../css/GenreListLayout.module.css';

function createGameCard(games){
  return <GameCard 
    key={games.gameID}
    img={games.img}
    game_name={games.game_name}
    genre={games.genre}

  />
}

const Genre = () => {
  return (
    <div className={classes.parent}>
       <div className={classes.firstChild}>
         <GenreList />
       </div>
       <div className={classes.secondChild}>
         <div className={classes.genre_type}>
           <h2 className={classes.genre_header}>GENRE: </h2>
         </div>
         <div className={classes.genre_content}>
           {Games.map(games =><GameCard 
              key={games.gameID}
              img={games.img}
              game_name={games.game_name}
              genre={games.genre}
            />)}
         </div>
       </div>
     </div>
  )
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
