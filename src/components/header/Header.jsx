import React from "react";
import logo from "/public/logo.svg";
import "./Header.scss";
const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <div className="link_menu">
            <a href="#" className="link">
              Продукция
            </a>
            <a href="#" className="link">
              Сертификаты
            </a>
            <a href="#" className="link">
              Наша команда
            </a>
            <a href="#" className="link">
              О нас
            </a>
            <a href="#" className="link">
              Новости
            </a>
            <a href="#" className="link">
              Вакансии
            </a>
            <a href="#" className="contact">
              Контакты
            </a>
          </div>
          <div className="til">
            <p className="ru">RU</p>
            <p className="lang">EN</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
