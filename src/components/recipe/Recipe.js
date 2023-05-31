import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Recipe.scss";

export default function Recipe({ mealData }) {
  const [recipeData, setRecipeData] = useState(null);

  const getreceipeID = (id) => {
    // Do something with the ID
    console.log("Clicked ID:", id);
  };

  useEffect(() => {
    fetchData();
  }, [mealData]); // Re-run effect when mealData prop changes

  const fetchData = () => {
    if (mealData) {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealData.idMeal}`)
        .then((response) => {
          const data = response.data.meals[0];
          setRecipeData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 20; i++) {
      const measureKey = `strMeasure${i}`;
      const ingredientKey = `strIngredient${i}`;
      if (recipeData[measureKey] && recipeData[ingredientKey]) {
        rows.push(
          <tr key={i}>
            <td>{recipeData[measureKey]}</td>
            <td>{recipeData[ingredientKey]}</td>
          </tr>
        );
      } else {
        break; // Stop generating rows if data is not available
      }
    }
    return rows;
  };

  return (
    <div className="home__random-recipe">
      {recipeData && (
        <table>
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Ingredient</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{recipeData.strMeasure1}</td>
              <td>{recipeData.strIngredient1}</td>
            </tr>
            <tr>
              <td>{recipeData.strMeasure2}</td>
              <td>{recipeData.strIngredient2}</td>
            </tr>
            {generateRows()}
          </tbody>
        </table>
      )}
    </div>
  );
}
