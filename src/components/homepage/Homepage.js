import React from "react";
import "./Homepage.scss";
import NavBar from "../../components/navbar/Navbar.js";
import Foodbutton from "../foodbutton/Foodbutton.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Homepage() {
  // const param = useParams();
  // const recipeID = param.id;
  // const [defaultRecipeID, setDefaultRecipeID] = useState(null);
  // useEffect(() => {
  //   axios
  //     .get("www.themealdb.com/api/json/v1/1/random.php")
  //     .then((response) => setDefaultRecipeID(response.data));
  //   console.log(response.data);
  // }, []);

  // if (!defaultRecipeID) {
  //   return <h1>Loading...</h1>;
  // }
  // const activeRecipeID = recipeID || defaultRecipeID;
  const fetchData = () => {
    console.log("Fetching data..."); // Add this line
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        const data = response.data;
        console.log(data); // Add this line
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="wrap">
      <div className="nav">
        <NavBar />
      </div>
      <div className="home">
        <div className="home__container">
          <h1 className="home__title">Today's Option</h1>

          <div className="home__random">
            <img
              src="https://www.themealdb.com/images/media/meals/4er7mj1598733193.jpg"
              className="home__random-image"
              alt="picture"
            />
            <p className="home__random-text">Koshari</p>
          </div>
          <Foodbutton />
        </div>
      </div>
    </div>
  );
}
