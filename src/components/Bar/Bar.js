import React, { useEffect, useState } from "react";
import axios from "axios";
import "./bar.scss";
import Aos from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    Aos.init({
      duration: 2500,
    });
  }, []);
  return (
    <section className="bar">
      <div className="bar__img">
        <h1 className="bar__title" data-aos="fade-up-right">
          SCHOOL IS IN SESSION
        </h1>
      </div>
      <div className="bar__form-wrapper">
        <form className="bar__form" onSubmit={searchByName} data-aos="fade-up">
          <input
            className="bar__field"
            type="text"
            name="search"
            id="search"
            placeholder="Pick Your Poison"
            data-aos="fade-up-right"
          />
          <button type="submit" className="bar__btn bar__btn--name">
            Search
          </button>
        </form>

        {spirit ? (
          <div className="bar__detail-wrapper">
            <div className="bar__detail" data-aos="fade-up">
              <h2 className="bar__detail-title" data-aos="fade-up-right">
                Name: {spirit.strIngredient}
              </h2>

              <h3 className="bar__detail-subtitle" data-aos="fade-up-right">
                Tags: {spirit.strType}
              </h3>

              <h3 className="bar__detail-abv" data-aos="fade-up-right">
                Alcohol Volume (ABV) : {spirit.strABV} %
              </h3>

              <p className="bar__detail-des" data-aos="fade-up-right">
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
