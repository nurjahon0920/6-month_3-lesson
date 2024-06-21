import React, { useState } from "react";
import logo from "/public/logo.svg";
import "./Header.scss";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <div className="link_menu">
          <div className="link_with_dropdown">
            <a href="#" className="link" onClick={toggleDropdown}>
              Продукция
            </a>
            {isDropdownOpen && (
              <div className="dropdown_menu">
                <a href="#Ламинатные тубы" className="dropdown_link">
                  Ламинатные тубы
                </a>
                <a href="#" className="dropdown_link">
                  Экструзионные тубы
                </a>
                <a href="#" className="dropdown_link">
                  Другая упаковка
                </a>
              </div>
            )}
          </div>
          <a href="#sertifikat" className="link">
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
      </header>
    </>
  );
};

export default Header;
