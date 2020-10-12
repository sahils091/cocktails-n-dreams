import React, { useState } from "react";
import axios from "axios";
import "./input.scss";
import Drink from "../Drink/Drink";

const Input = () => {
  const [drink, setDrink] = useState(null);
  const [surprise, setSurprise] = useState(null);

  const searchByName = (e) => {
    e.preventDefault();
    let k = e.target.search.value;
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + k)
      .then((res) => {
        console.log(res.data.drinks);
        let data = res.data.drinks[0];
        setDrink(data);
      });
    console.log(drink);
  };

  const randomDrink = (e) => {
    e.preventDefault();
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => {
        let data = res.data.drinks[0];
        setSurprise(data);
      });
  };

  console.log(drink);
  console.log(surprise);
  return (
      <>
    <section className="input">
      <h2 className="input__title">Find Your Favorite Cocktail</h2>

      <div className="input__wrapper">
        <form className="input__form" onSubmit={searchByName}>
          <input
            className="input__field"
            type="text"
            name="search"
            id="search"
          />

          <button type="submit" className="input__btn--name">
            Search By Name
          </button>
        </form>

        <div className="input__subtitle-wrapper">
          <h3 className="input__subtitle">Feeling Lucky Punk?</h3>
          <button
            type="button"
            className="input__btn--surprise"
            onClick={randomDrink}
          >
            Surprise Me!
          </button>
        </div>
      </div>
    </section>
    <Drink drink={drink} surprise={surprise}/>
    </>
  );
};

export default Input;
