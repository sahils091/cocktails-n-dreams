import React, { useState } from "react";
import axios from "axios";
import "./bar.scss";

const Bar = () => {
  const [spirit, setSpirit] = useState(null);
  const searchByName = (e) => {
    e.preventDefault();
    let k = e.target.search.value;
    console.log(k);
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" + k)
      .then((res) => {
        setSpirit(res.data.ingredients[0]);
      });
  };
  return (
    <section className="bar">
      <div className="bar__img">
        <h1 className="bar__title">SCHOOL IS IN SESSION</h1>
      </div>
      <div className="bar__form-wrapper">
        <form className="bar__form" onSubmit={searchByName}>
          <input className="bar__field" type="text" name="search" id="search" />
          <button type="submit" className="bar__btn bar__btn--name">
            Search
          </button>
        </form>

        {spirit ? (
          <div className="bar__detail-wrapper">
            <div className="bar__detail">
              <h2 className="bar__detail-title">
                Name: {spirit.strIngredient}
              </h2>

              <h3 className="bar__detail-subtitle">Tags: {spirit.strType}</h3>

              <h3 className="bar__detail-abv">
                Alcohol Volume (ABV) : {spirit.strABV}
              </h3>

              <p className="bar__detail-des">
                {" "}
                Description : {spirit.strDescription}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Bar;

