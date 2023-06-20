// import { Fragment, useEffect, useState } from "react";
// import Card from "../components/Card";
// import { DUMMY_GAMES } from "../data/Account_Data";

// function GameCategoryPage() {
//   const [state, setState] = useState({
//     games: [],
//     isLoading: true,
//   });

//   useEffect(() => {
//     // http call to populate games
//     setState({
//       ...state,
//       isLoading: false,
//       games: DUMMY_GAMES,
//     });
//   }, []);

//   const { games, isLoading } = state;

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Fragment>
//       {games.map((game) => (
//         <Card key={game.gameId} game={game} />
//       ))}
//     </Fragment>
//   );
// }

// export default GameCategoryPage;
