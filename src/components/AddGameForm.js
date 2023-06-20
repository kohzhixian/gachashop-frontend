import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./UI/Card";
import Button from "./UI/Button";
import classes from "../css/addGameForm.module.css";
import { getAuthToken } from "../util/auth";

const AddGameForm = () => {
  const [gameName, setGameName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState("");
  const [genre, setGenre] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const token = getAuthToken();
  
  const handleGameName = e => {
    setGameName(e.target.value);
  }

  const handleGenre = e => {
    setGenre(e.target.value);
  }

  const handleImageURL = e => {
    setImageURL(e.target.value);
  }

  const handlePrice = e => {
    setPrice(e.target.value);
  }

  const handleAddGame = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:4000/api/genres/addgame", {
        method: "POST",
        body: JSON.stringify({
          game_name: gameName,
          genre: genre,
          image_url: imageURL,
          price: price
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + token
        },
      });
      const responseData = await response.json();
      console.log("GAME ADDED");
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  return (
    <Card className={classes.input}>
      <form>
        <label htmlFor="gameName">Game Name:</label>
        <input type="text"  value={gameName} onChange={handleGameName} />
        <label htmlFor="genre">Genre:</label>
        <input type="text" value={genre} onChange={handleGenre}/>
        <label htmlFor="imageURL">Image:</label>
        <input type="text"  value={imageURL} onChange={handleImageURL}/>
        <label htmlFor="price">Price:</label>
        <input type="text"  value={price} onChange={handlePrice}/>
        <Link to="/admin">
          <Button type="submit" onClick={handleAddGame}>
            Add Games
          </Button>
        </Link>
      </form>
    </Card>
  );
};

export default AddGameForm;
