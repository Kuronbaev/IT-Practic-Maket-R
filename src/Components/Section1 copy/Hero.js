import React from "react";
import "./Hiror.css";

const Hero = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="hiror">
            <div className="hiror-blog">
              <div className="hiror-txt">
                <h1>Подпишитесь сейчас за 19,00 $ / мес</h1>
                <p>
                  И получите доступ к материалам и кейсам, а также к новым{" "}
                  <br />
                  мастер-классам{" "}
                </p>
              </div>
              <div className="hiror-btns">
                <button className="hiror-btn">
                  <a href="#">hello</a>
                </button>
                <a href="#">Подробнее о пакетах </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
