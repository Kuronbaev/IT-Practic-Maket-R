import React from "react";
import { Link } from "react-router-dom";
import "./Onas.css";
const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="onas">
          <div className="onas-nav">
            <Link to={"/"}>Главная </Link>
            <Link to={"/onas"}>
              <span>/ О нас</span>
            </Link>
          </div>
          <h1>О нас</h1>
          <p>
            Курсы IT-профессий Motion Web была основана в 2021-ом году в Бишкеке
            с целью дать возможность каждому человеку, даже без опыта в
            технологиях, гарантированно освоить IT-профессию.
          </p>
          <p>
            Форма обучения - онлайн, с применением электронного обучения и
            дистанционных образовательных технологий на образовательной
            платформе Moodle и прямые эфиры с преподавателем. 154 академических
            часа трудоёмкости учебной деятельности отведено практическим
            занятиям и выполнению практических заданий.
          </p>

          <div className="onas-image">
            <img src="./onas.png" alt="" />
            <img src="./onas2.png" alt="" />
          </div>
          <div className="onas-serf">
            <h1>Сертификат</h1>
            <p>По окончании обучения выдается онлайн сертификат.</p>
            <img src="./ser.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
