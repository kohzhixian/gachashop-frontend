import { React, useState } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import { Link } from "react-router-dom";
import classes from "../css/updateGameForm.module.css";
import { getAuthToken } from "../util/auth";

const UpdateGameForm = () => {
  const [gameId, setGameId] = useState("");
  const [price, setPrice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const token = getAuthToken();
  const handleGameId = (e) => {
    setGameId(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleUpdateGame = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:4000/api/genres/updategame/${gameId}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            price: price,
          }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token,
          },
        }
      );
      const responseData = response.json();
      console.log("Game Updated");
      if (!response.ok) {
        throw new Error(responseData.message);
      }
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
        <label htmlFor="price">Price:</label>
        <input type="text" value={price} onChange={handlePrice} />
        <Link to="/admin">
          <Button type="submit" onClick={handleUpdateGame}>
            Update Game
          </Button>
        </Link>
      </form>
    </Card>
  );
};

export default UpdateGameForm;
