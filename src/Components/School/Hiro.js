import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./School.css";
const Hiro = () => {
  return (
    <section>
      <div className="container">
        <div className="blig">
          <h1>Курсы</h1>
          <div className="bligs">
            <div className="bligg">
              <h2>Frontend-разработчик</h2>
              <p>
                Мастер создания сайтов. Умеет <br /> делать их красивыми, <br />
                интерактивными, с большим <br /> функционалом. Профессия отлично{" "}
                <br />
                подойдет тем, кто хочет фрилансить <br /> и постоянно
                разрабатывать новые <br /> проекты
              </p>
              <a href="#">
                Подробнее <BsArrowRight />
              </a>
            </div>
            <div className="bligg">
              <h2>Backend-разработчик</h2>
              <p>
                Специалист, который отвечает за <br /> построение логики для
                воплощения <br />
                любой идеи. Он собирает фундамент <br /> и опорную систему для
                проекта - от <br /> простого сайта для магазина одежды <br /> до
                сложных вычислительных систем <br /> нейронных сетей.
              </p>
              <a href="#">
                Подробнее <BsArrowRight />
              </a>
            </div>
            <div className="bligg">
              <h2>UX / UI Дизайнер</h2>
              <p>
                Креативный специалист, который <br /> придумывает дизайн и
                интерфейс <br />
                продукта. Специалист UX/UI отвечает <br /> за подбор форм,
                цветов, <br />
                Функциональности дизайна и прочих <br /> важных параметров для
                комфорьного <br /> использования продукта.
              </p>
              <a href="#">
                Подробнее <BsArrowRight />
              </a>
            </div>
          </div>
          <button>Все курсы</button>
        </div>
      </div>
    </section>
  );
};

export default Hiro;
