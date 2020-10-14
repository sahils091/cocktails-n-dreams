import React, { useEffect, useState } from "react";
import axios from "axios";
import "./input.scss";
import Drink from "../Drink/Drink";
import Aos from "aos";
import "aos/dist/aos.css";

const Input = () => {
  const [drink, setDrink] = useState(null);
  const [surprise, setSurprise] = useState(null);

  useEffect(() => {
    Aos.init({
      duration: 2500,
    });
  }, []);

  const searchByName = (e) => {
    e.preventDefault();
    let k = e.target.search.value;
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + k)
      .then((res) => {
        let data = res.data.drinks[0];
        setDrink(data);
      });
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
  return (
    <>
      <section className="input">
        <h2 className="input__title" data-aos="fade-up-right">
          Find Your Favorite Cocktail
        </h2>

        <div className="input__wrapper" data-aos="fade-up">
          <form
            className="input__form"
            data-aos="fade-up-right"
            onSubmit={searchByName}
          >
            <input
              className="input__field"
              type="text"
              name="search"
              id="search"
              placeholder="Pick Your Poison"
            />

            <button type="submit" className="input__btn input__btn--name">
              Search By Name
            </button>
          </form>

          <div className="input__subtitle-wrapper">
            <h3 className="input__subtitle">Feeling Adventurous?</h3>
            <button
              type="button"
              className=" input__btn input__btn--surprise"
              onClick={randomDrink}
            >
              Surprise Me!
            </button>
          </div>
        </div>
      </section>
      <Drink drink={drink} surprise={surprise} />
    </>
  );
};

export default Input;
