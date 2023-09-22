import React, { Component } from "react";
import "./Products.scss";
import { image10, image11, image12, image13, image14 } from "../../assets/main";

export class Products extends Component {
  render() {
    return (
      <section className="products">
        <div className="container products-content">
          <div className="d1">
            <p className="p1">
              Наша <span className="sp1">продукция</span>
            </p>
            <div className="product-btns">
              <a href="#">
                {" "}
                <button className="btn2">Ламинатные тубы</button>
              </a>
              <a href="#">
                {" "}
                <button className="btn2">Экструзионные тубы</button>
              </a>
              <a href="#">
                {" "}
                <button className="btn2">Другая упаковка</button>
              </a>
            </div>
          </div>
          <div className="d2">
            <div className="product-img">
              <img src={image10} alt="" />
            </div>
            <div className="product-img">
              <img src={image11} alt="" />
            </div>
            <div className="product-img">
              <img src={image12} alt="" />
            </div>
            <div className="product-img">
              <img src={image13} alt="" />
            </div>
            <div className="product-img">
              <img src={image14} alt="" />
            </div>
          </div>
          <div className="pro-btn">
            <a href="#">
              <button className="btn3">Перейти в каталог</button>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Products;
