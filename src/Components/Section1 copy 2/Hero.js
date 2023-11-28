import React from "react";
import "./Heror.css";
const Hero = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="heror">
            <div className="heror-txt">
              <h1>Оставить заявку</h1>
              <p>
                Заполните краткую форму с ключевым <br /> вопросами, и мы
                подготовимся к разговору с <br /> вами{" "}
              </p>
            </div>
            <div className="heror-input">
              <input type="text" placeholder="ФИО*" />
              <input type="number" placeholder="Номер телефон*" />
              <input type="email" placeholder="Email*" />
              <button>Отправить</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
