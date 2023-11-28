import React from "react";
import "./School.css";
const Paket = () => {
  return (
    <section>
      <div className="container">
        <div className="paket">
          <h1 className="paket-h1">Уровень пакетов</h1>
          <p className="paket-p">
            Списания будут автоматическими. Вы всегда можете отменить подписку в{" "}
            <br />
            Вашем личном кабинете и больше списаний не будет
          </p>
          <div className="paket-blogs">
            <div className="paket-blog">
              <h4>Месяц +</h4>
              <h5>Доступны: Все статьи</h5>
              <h1>105,00 $</h1>
              <p>Ежемесячно</p>
              <div className="paket-btns">
                <button>Оформить подписку</button>
                <button>Подробнее</button>
              </div>
            </div>{" "}
            <div className="paket-blog">
              <h4>Год +</h4>
              <h5>
                Доступны: Все Мастер классы и <br /> статьи и курсы
              </h5>
              <h1>585,00 $</h1>
              <p>Ежегодно</p>
              <div className="paket-btns">
                <button>Оформить подписку</button>
                <button>Подробнее</button>
              </div>
            </div>{" "}
            <div className="paket-blog">
              <h4>Год</h4>
              <h5>
                Доступны: Все Мастер классы и <br /> статьи и курсы
              </h5>
              <h1>220,00 $</h1>
              <p>Ежегодно</p>
              <div className="paket-btns">
                <button>Оформить подписку</button>
                <button>Подробнее</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Paket;
