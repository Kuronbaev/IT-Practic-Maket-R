import React from "react";
import "./Hiro.css";
import { Link } from "react-router-dom";
import { GrDocumentText } from "react-icons/gr";
const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="hiro">
          <h1>Последние статьи</h1>
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
          <button className="hiro-btn">
            <Link to={"/pod"}>Показать больше</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
