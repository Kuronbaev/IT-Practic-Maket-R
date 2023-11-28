import React from "react";
import { Link } from "react-router-dom";
import { GrDocumentText } from "react-icons/gr";
import "../Section1 copy/Hiror.css";
// import "../Onas/Onas.css";

const Stats = () => {
  return (
    <div className="container">
      <div className="onas-nav">
        <Link to={"/"}>Главная </Link>
        <Link to={"/onas"}>
          <span>/ О нас</span>
        </Link>
      </div>
      <h1>Статьи</h1>
      <div className="blogs">
        <div className="blog">
          <img src="./blog.png" alt="" />
          <h3>Статьи</h3>
          <p>
            Мы подготовили подборку самых <br /> популярных курсов по
            направлению <br />
            Java в IBS Training Center.
          </p>
          <div className="hiro-data">
            <a href="#">
              <GrDocumentText size="20" color="red" />
              Читать
            </a>
            <p>01.02.2022</p>
          </div>
        </div>
        <div className="blog">
          <img src="./blog.png" alt="" />
          <h3>Статьи</h3>
          <p>
            Мы подготовили подборку самых <br /> популярных курсов по
            направлению <br />
            Java в IBS Training Center.
          </p>
          <div className="hiro-data">
            <a href="#">
              <GrDocumentText size="20" color="red" />
              Читать
            </a>
            <p>01.02.2022</p>
          </div>
        </div>
        <div className="blog">
          <img src="./blog.png" alt="" />
          <h3>Статьи</h3>
          <p>
            Мы подготовили подборку самых <br /> популярных курсов по
            направлению <br />
            Java в IBS Training Center.
          </p>
          <div className="hiro-data">
            <a href="#">
              <GrDocumentText size="20" color="red" />
              Читать
            </a>
            <p>01.02.2022</p>
          </div>
        </div>
      </div>
      <div className="blogs">
        <div className="blog">
          <img src="./blog.png" alt="" />
          <h3>Статьи</h3>
          <p>
            Мы подготовили подборку самых <br /> популярных курсов по
            направлению <br />
            Java в IBS Training Center.
          </p>
          <div className="hiro-data">
            <a href="#">
              <GrDocumentText size="20" color="red" />
              Читать
            </a>
            <p>01.02.2022</p>
          </div>
        </div>
        <div className="blog">
          <img src="./blog.png" alt="" />
          <h3>Статьи</h3>
          <p>
            Мы подготовили подборку самых <br /> популярных курсов по
            направлению <br />
            Java в IBS Training Center.
          </p>
          <div className="hiro-data">
            <a href="#">
              <GrDocumentText size="20" color="red" />
              Читать
            </a>
            <p>01.02.2022</p>
          </div>
        </div>
        <div className="blog">
          <img src="./blog.png" alt="" />
          <h3>Статьи</h3>
          <p>
            Мы подготовили подборку самых <br /> популярных курсов по
            направлению <br />
            Java в IBS Training Center.
          </p>
          <div className="hiro-data">
            <a href="#">
              <GrDocumentText size="20" color="red" />
              Читать
            </a>
            <p>01.02.2022</p>
          </div>
        </div>
      </div>
      <div className="blogs">
        <div className="blog">
          <img src="./blog.png" alt="" />
          <h3>Статьи</h3>
          <p>
            Мы подготовили подборку самых <br /> популярных курсов по
            направлению <br />
            Java в IBS Training Center.
          </p>
          <div className="hiro-data">
            <a href="#">
              <GrDocumentText size="20" color="red" />
              Читать
            </a>
            <p>01.02.2022</p>
          </div>
        </div>
        <div className="blog">
          <img src="./blog.png" alt="" />
          <h3>Статьи</h3>
          <p>
            Мы подготовили подборку самых <br /> популярных курсов по
            направлению <br />
            Java в IBS Training Center.
          </p>
          <div className="hiro-data">
            <a href="#">
              <GrDocumentText size="20" color="red" />
              Читать
            </a>
            <p>01.02.2022</p>
          </div>
        </div>
        <div className="blog">
          <img src="./blog.png" alt="" />
          <h3>Статьи</h3>
          <p>
            Мы подготовили подборку самых <br /> популярных курсов по
            направлению <br />
            Java в IBS Training Center.
          </p>
          <div className="hiro-data">
            <a href="#">
              <GrDocumentText size="20" color="red" />
              Читать
            </a>
            <p>01.02.2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
