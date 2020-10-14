import React, { useEffect } from "react";
import "./drink.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const Drink = (props) => {

  useEffect(() => {
    Aos.init({
      duration: 2500,
    });
  }, []);


  return (
    <section className="drink" >
      <div className="drink__wrapper" data-aos="fade-up">
        {props.drink ? (
          <div className="drink__detail">
            <h3 className="drink__detail-title" data-aos="fade-up-right">{props.drink.strDrink}</h3>
            <img
              data-aos="fade-right"
              className="drink__detail-img"
              src={props.drink.strDrinkThumb}
              alt={props.drink.idDrink}
            />
            <ol  
            data-aos="fade-right"
            className="drink__detail-list">
              <h3>Ingredients</h3>
              {props.drink.strIngredient1 ? (
                <li className="drink__detail-item">
                  {props.drink.strIngredient1}
                </li>
              ) : null}
              {props.drink.strIngredient2 ? (
                <li className="drink__detail-item">
                  {props.drink.strIngredient2}
                </li>
              ) : null}
              {props.drink.strIngredient3 ? (
                <li className="drink__detail-item">
                  {props.drink.strIngredient3}
                </li>
              ) : null}
              {props.drink.strIngredient4 ? (
                <li className="drink__detail-item">
                  {props.drink.strIngredient4}
                </li>
              ) : null}
              {props.drink.strIngredient5 ? (
                <li className="drink__detail-item">
                  {props.drink.strIngredient5}
                </li>
              ) : null}
              {props.drink.strIngredient6 ? (
                <li className="drink__detail-item">
                  {props.drink.strIngredient6}
                </li>
              ) : null}
              {props.drink.strIngredient7 ? (
                <li className="drink__detail-item">
                  {props.drink.strIngredient7}
                </li>
              ) : null}
              {props.drink.strIngredient8 ? (
                <li className="drink__detail-item">
                  {props.drink.strIngredient8}
                </li>
              ) : null}
              {props.drink.strIngredient9 ? (
                <li className="drink__detail-item">
                  {props.drink.strIngredient9}
                </li>
              ) : null}
              {props.drink.strIngredient10 ? (
                <li className="drink__detail-item">
                  {props.drink.strIngredient10}
                </li>
              ) : null}
              {props.drink.strIngredient11 ? (
                <li className="drink__detail-item">
                  {props.drink.strIngredient11}
                </li>
              ) : null}
              {props.drink.strIngredient12 ? (
                <li className="drink__detail-item">
                  {props.drink.strIngredient12}
                </li>
              ) : null}
              {props.drink.strIngredient13 ? (
                <li className="drink__detail-item">
                  {props.drink.strIngredient13}
                </li>
              ) : null}
            </ol>
            <p className="drink__detail-directions" data-aos="fade-right">
              {" "}
              {props.drink.strInstructions}
            </p>
          </div>
        ) : null}
      </div>

      <div data-aos="fade-up">
        {props.surprise ? (
          <div className="drink__detail">
            <h3 className="drink__detail-title" data-aos="fade-up-right">{props.surprise.strDrink}</h3>
            <img
             data-aos="fade-right"
              className="drink__detail-img"
              src={props.surprise.strDrinkThumb}
              alt={props.surprise.idDrink}
            />
            <ol  
            data-aos="fade-right"
            className="drink__detail-list">
              {props.surprise.strIngredient1 ? (
                <li className="drink__detail-item">
                  {props.surprise.strIngredient1}
                </li>
              ) : null}
              {props.surprise.strIngredient2 ? (
                <li className="drink__detail-item">
                  {props.surprise.strIngredient2}
                </li>
              ) : null}
              {props.surprise.strIngredient3 ? (
                <li className="drink__detail-item">
                  {props.surprise.strIngredient3}
                </li>
              ) : null}
              {props.surprise.strIngredient4 ? (
                <li className="drink__detail-item">
                  {props.surprise.strIngredient4}
                </li>
              ) : null}
              {props.surprise.strIngredient5 ? (
                <li className="drink__detail-item">
                  {props.surprise.strIngredient5}
                </li>
              ) : null}
              {props.surprise.strIngredient6 ? (
                <li className="drink__detail-item">
                  {props.surprise.strIngredient6}
                </li>
              ) : null}
              {props.surprise.strIngredient7 ? (
                <li className="drink__detail-item">
                  {props.surprise.strIngredient7}
                </li>
              ) : null}
              {props.surprise.strIngredient8 ? (
                <li className="drink__detail-item">
                  {props.surprise.strIngredient8}
                </li>
              ) : null}
              {props.surprise.strIngredient9 ? (
                <li className="drink__detail-item">
                  {props.surprise.strIngredient9}
                </li>
              ) : null}
              {props.surprise.strIngredient10 ? (
                <li className="drink__detail-item">
                  {props.surprise.strIngredient10}
                </li>
              ) : null}
              {props.surprise.strIngredient11 ? (
                <li className="drink__detail-item">
                  {props.surprise.strIngredient11}
                </li>
              ) : null}
              {props.surprise.strIngredient12 ? (
                <li className="drink__detail-item">
                  {props.surprise.strIngredient12}
                </li>
              ) : null}
              {props.surprise.strIngredient13 ? (
                <li className="drink__detail-item">
                  {props.surprise.strIngredient13}
                </li>
              ) : null}
            </ol>
            <p data-aos="fade-right" className="drink__detail-directions">
              {props.surprise.strInstructions}
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Drink;
