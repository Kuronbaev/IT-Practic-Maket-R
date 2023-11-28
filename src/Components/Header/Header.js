import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <div className="header-nav">
            <Link to={"/"}>
              {" "}
              <img src="./logo.svg" alt="" />
            </Link>
            <Link className="hello" to={"/information"}>
              О школе
            </Link>
            <Link to={"/pod"}>Наши курсы</Link>
            <Link to={"/onas"}>О нас</Link>
          </div>
          <div className="header-btns">
            <a href="#">Войти</a>
            <button className="header-btn">Подписаться </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
