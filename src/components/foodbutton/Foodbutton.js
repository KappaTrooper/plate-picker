import React from "react";
import "./Foodbutton.scss";
export default function Foodbutton() {
  return (
    <div className="foodCard">
      <div className="foodCard__container">
        <img
          src="https://www.themealdb.com/images/category/dessert.png"
          className="foodCard_image"
          alt="picture"
        />
        <p className="foodCard__text">Dessert</p>
      </div>
      <div className="foodCard__container">
        <img
          src="https://www.themealdb.com/images/category/miscellaneous.png"
          className="foodCard_image"
          alt="picture"
        />
        <p className="foodCard__text">Pasta</p>
      </div>
      <div className="foodCard__container">
        <img
          src="https://www.themealdb.com/images/category/side.png"
          className="foodCard_image"
          alt="picture"
        />
        <p className="foodCard__text">Side</p>
      </div>
    </div>
  );
}
