import { React, useState } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import { Link } from "react-router-dom";
import classes from "../css/deleteGameForm.module.css";
import { getAuthToken } from "../util/auth";

const DeleteGameForm = () => {
  const [gameId, setGameId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const token = getAuthToken();

  const handleGameId = (e) => {
    setGameId(e.target.value);
  };

  const handleDeleteGame = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:4000/api/genres/deletegame/${gameId}`,
        {
          method: "DELETE",
          body: null,
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if(!response.ok){
        throw new Error("Deleting of Game Failed");
      }
      console.log("Game Deleted");
      setIsLoading(false);
      setGameId("");
    //   window.location.reload(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };
  return (
    <Card className={classes.input}>
      <form>
        <label htmlFor="gameName">Game ID:</label>
        <input type="text" value={gameId} onChange={handleGameId} />
        <Link to="/admin">
          <Button type="submit" onClick={handleDeleteGame}>
            Delete Game
          </Button>
        </Link>
      </form>
    </Card>
  );
};

export default DeleteGameForm;
