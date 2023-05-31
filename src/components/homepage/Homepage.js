import React, { useState, useEffect } from "react";
import "./Homepage.scss";
import NavBar from "../../components/navbar/Navbar.js";
import Recipe from "../recipe/Recipe.js";
import axios from "axios";

export default function Homepage() {
  const [mealData, setMealData] = useState(null);

  const getreceipeID = (id) => {
    console.log("Clicked ID:", id);
  };

  useEffect(() => {
    getAPIdata();
  }, []);

  const getAPIdata = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        const data = response.data.meals[0];
        setMealData(data);
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
        <h1 className="home__title">Today's Choice</h1>
        <div className="home__container">
          <div
            className="home__random"
            onClick={() => getreceipeID(mealData?.idMeal)}
          >
            <p className="home__random-text">{mealData?.strMeal}</p>
            <img
              src={mealData?.strMealThumb}
              className="home__random-image"
              alt="meal"
            />
            <div className="home__random-tags">
              <div className="home__random-tagbox">
                <p className="home__random-text">Region: </p>
                <p className="home__random-text">{mealData?.strArea}</p>
              </div>
              <div className="home__random-tagbox">
                <p className="home__random-text">Category: </p>
                <p className="home__random-text">{mealData?.strCategory}</p>
              </div>
            </div>

            <div className="home__random-recipe-component">
              <Recipe mealData={mealData} /> {/* Pass mealData as a prop */}
            </div>

            <div className="home__random-instructions">
              <p className="home__random-instructions-text">
                {mealData?.strInstructions.split("\r\n\r\n").join("\n\n")}
              </p>
              <p className="home__random-instructions-text-id">
                {mealData?.idMeal}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
