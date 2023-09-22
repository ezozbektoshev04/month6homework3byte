import React, { Component } from "react";
import "./Header.scss";
import { image1, image2 } from "../../assets/main";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { navToggle: false };
  }

  isToggled = () => {
    this.setState({
      navToggle: !this.state.navToggle,
    });
  };

  render() {
    return (
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <img src={image1} alt="" />
            </div>
            <div className={this.state.navToggle ? "nav-links" : "toggle"}>
              <a href="#" className="nav-link">
                Продукция
              </a>
              <span className="line"></span>
              <a href="#" className="nav-link">
                Сертификаты
              </a>
              <span className="line"></span>
              <a href="#" className="nav-link">
                Наша команда
              </a>
              <span className="line"></span>
              <a href="#" className="nav-link">
                О нас
              </a>
              <span className="line"></span>
              <a href="#" className="nav-link">
                Новости
              </a>
              <span className="line"></span>
              <a href="#" className="nav-link">
                Вакансии
              </a>
              <span className="line"></span>
              <a href="#" className="nav-link">
                Контакты
              </a>
            </div>
            <div className="btns">
              <div className="dark-mode">{this.props.children}</div>
              <div className="menu">
                <button className="menu-btn" onClick={this.isToggled}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    className="menu-icon"
                  >
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
