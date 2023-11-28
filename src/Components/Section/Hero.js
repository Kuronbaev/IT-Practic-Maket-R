import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="hero">
          <div className="hero-txt">
            <div className="hero-txt">
              <h1>
                IT образовательная <br /> платформа`{" "}
              </h1>
              <p>
                Наша образовательная платформа вам <br /> даст необходимые
                практические <br />
                знания для адаптации в IT-сфере.
              </p>
            </div>
            <img src="./hero.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
