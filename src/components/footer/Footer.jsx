import React, { Component } from "react";
import { image1, image25, image26 } from "../../assets/main";
import "./Footer.scss";

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { navToggle: false };
  }
  backtop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  render() {
    return (
      <footer>
        <div className="container footer-content">
          <div className="d1">
            <img src={image1} alt="" />
            <img src={image25} alt="" />
          </div>
          <span className="line2"></span>
          <div className="d2">
            <div className="d3">
              <div className="d4">
                {" "}
                <p className="p1">Продукция</p>
                <p className="p2">Ламинатные тубы</p>
                <p className="p2">Экструзионные тубы</p>
                <p className="p2">Другая упаковка</p>
              </div>
              <div className="d4">
                {" "}
                <p className="p1">Компания</p>
                <p className="p2">О нас</p>
                <p className="p2">Наша команда</p>
                <p className="p2">Сертификаты</p>
              </div>
              <div className="d4">
                {" "}
                <p className="p1">Разделы</p>
                <p className="p2">Контакты</p>
                <p className="p2">Новости</p>
                <p className="p2">Вакансии</p>
              </div>
            </div>
            <div className="d5">
              <div className="d6">
                <div className="d7">
                  <p className="p3">Беларусь</p>
                  <p className="p4">+375 (17) 270 53 77</p>
                  <p className="p4">+375 (17) 270 53 78</p>
                </div>
                <div className="d7">
                  <p className="p3">Европа</p>
                  <p className="p4">+48 73 1111 044</p>
                </div>
              </div>
              <div className="d6">
                <div className="d7">
                  <p className="p3">Москва</p>
                  <p className="p4">+7 (495) 280 73 44</p>
                  <p className="p4">+7 (495) 280 73 44</p>
                </div>
                <div className="d7">
                  <p className="p3">Екатеринбург</p>
                  <p className="p4">+7 (343) 346 82 06</p>
                </div>
              </div>
            </div>
          </div>
          <div className="con">
            <p className="p5">
              © 2022 Leangroup. All Rights Reserved. <br /> Разработка и
              продвижение сайтов SkyWeb.by
            </p>
          </div>
          <div className="backtop" onClick={this.backtop}>
            <img src={image26} alt="" />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
