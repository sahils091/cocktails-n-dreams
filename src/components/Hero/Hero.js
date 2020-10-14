import React, { useEffect } from "react";
import "./hero.scss";
import Aos from "aos";
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(()=>{
    Aos.init({
        duration: 2500,
    });
    },[])
  return (
    <section className="hero">
      <div className="hero__wrapper">
          <h1 className="hero__title" data-aos="fade-up-right">ENJOY OUR COCKTAILS</h1>
      </div>
    </section>
  );
};

export default Hero;
