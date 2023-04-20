import { Fragment, useEffect, useState } from "react";
import Card from "./UI/Card";
import GameList from "./GameList";
import ErrorModal from "./UI/ErrorModal";
import { getAuthToken } from "../util/auth";

const ShowGames = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedGames, setLoadedGames] = useState();
  const token = getAuthToken();
  useEffect(() => {
    const sendRequest = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:4000/api/genres", {
          headers: {
            Authorization: 'Bearer ' + token,
          }
        });
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setLoadedGames(responseData.games);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, []);

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal 
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      {isLoading && <div>LOADING....</div>}
      {!isLoading && (
        <Card>
        <h1>ALL GAMES</h1>
        {!isLoading && loadedGames && <GameList items={loadedGames} />}
      </Card>
      )}
    </Fragment>
  );
};

export default ShowGames;
