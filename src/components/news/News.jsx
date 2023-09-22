import React, { Component } from "react";
import { image22, image23, image24 } from "../../assets/main";
import "./News.scss";

export class News extends Component {
  render() {
    return (
      <section className="news">
        <div className="container news-content">
          <p className="p1">Новости</p>
          <div className="news-cards">
            <div className="news-card">
              <img src={image22} alt="" className="img22" />
              <p className="p2">28.01.2022</p>
              <p className="p3">"ЛеанГрупп" серебряный призер EcoVadis!</p>
            </div>
            <div className="news-card">
              <img src={image23} alt="" />
              <p className="p2">21.01.2022</p>
              <p className="p3">"ЛеанГрупп" серебряный призер EcoVadis!</p>
            </div>
            <div className="news-card">
              <img src={image24} alt="" />
              <p className="p2">16.12.2021</p>
              <p className="p3">Туба, как вид упаковки</p>
            </div>
          </div>
          <div className="news-btn">
            <a href="#">
              <button className="btn6">Все новости</button>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default News;
