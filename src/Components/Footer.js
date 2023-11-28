import React from "react";
import { BsInstagram } from "react-icons/bs";
import { PiYoutubeLogoBold } from "react-icons/pi";
import { LiaFacebook } from "react-icons/lia";
import { FiTwitter } from "react-icons/fi";
import { PiTiktokLogo } from "react-icons/pi";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer-blog1">
            <img src="./logo.svg" alt="" />
            <div className="engl">
              <button>en</button>
              <button>ru</button>
            </div>
          </div>
          <div className="footer-blog2">
            <h1>Быстрые ссылки</h1>
            <a href="#">О школе</a>
            <a href="#">Наши курсы</a>
            <a href="#">О нас</a>
          </div>
          <div className="footer-blog5">
            <h1>Социальные сети</h1>
            <div className="soc">
              <a href="#">
                <BsInstagram size="40px" />
              </a>
              <a href="#">
                <PiYoutubeLogoBold size="40px" />
              </a>
              <a href="#">
                <LiaFacebook size="40px" />
              </a>
            </div>
            <div className="soc">
              <a href="#">
                <FiTwitter size="40px" />
              </a>
              <a href="#">
                <PiTiktokLogo size="40px" />
              </a>
              <a href="#">
                <PiTelegramLogoDuotone size="40px" />
              </a>
            </div>
          </div>
          <div className="footer-blog3">
            <h1>Контакты</h1>
            <a href="#">
              <MdOutlineEmail />
              @motionwebteam@gmail.com
            </a>
            <a href="#">
              <BsTelephone />
              +996 559 - 69 - 26 - 26
            </a>
          </div>
          <div className="footer-blog4">
            <h1>Адреса</h1>
            <a href="#">
              <FiMapPin />
              Турусбекова 109 / 3
            </a>
            <h3>Идентификационный код: 1234567890</h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
