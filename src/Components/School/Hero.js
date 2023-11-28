import React from "react";
import { Link } from "react-router-dom";
import "./School.css";
const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="whohero">
          <div className="whohero-txt flex items-center gap-2">
            <Link to={"/"}>Главная </Link>
            <Link to={"/information"}>
              <span>/ О школе</span>
            </Link>
          </div>
          <div className="whohero-df flex items-center content-between">
            <div className="who-hero-txt">
              <h1>О нашей школе:</h1>
              <p>
                Наша платформа — это интенсивная программа <br /> обучения для
                тех, кто хочет освоить востребованную <br /> профессию, войти в
                IT и зарабатывать больше.
              </p>
              <h1>Наша миссия:</h1>
              <p>
                Сформировать интерес к современным технологиям <br /> и помочь
                школьнику определиться с выбором <br /> будущей специальности.
              </p>
            </div>
            <img src="./glav.png" alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
