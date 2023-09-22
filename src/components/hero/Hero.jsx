import React, { Component } from "react";
import Slider from "react-slick";
import "./Hero.scss";

export class Hero extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <section className="hero">
        <div className="container hero-content">
          {/* <p className="p1">LEANGROUP - тубы и этикетки</p>
          <p className="p2">Ламинатные тубы</p>
          <p className="p3">
            Используются для производства зубных паст. Широко применяются в
            сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
            химии и DIY (Do-it-Yourself).
          </p>
          <a href="#">
            {" "}
            <button className="btn1">Каталог</button>
          </a> */}

          <div className="aa">
            <Slider {...settings}>
              <div>
                <p className="p1">LEANGROUP - тубы и этикетки</p>
                <p className="p2">Ламинатные тубы</p>
                <p className="p3">
                  Используются для производства зубных паст. Широко применяются
                  в сегменте косметики, пищевой индустрии, парафармацевтике,
                  бытовой химии и DIY (Do-it-Yourself).
                </p>
                <a href="#">
                  {" "}
                  <button className="btn1">Каталог</button>
                </a>
              </div>
              <div>
                <p className="p1">LEANGROUP - тубы и этикетки</p>
                <p className="p2">Ламинатные тубы</p>
                <p className="p3">
                  Используются для производства зубных паст. Широко применяются
                  в сегменте косметики, пищевой индустрии, парафармацевтике,
                  бытовой химии и DIY (Do-it-Yourself).
                </p>
                <a href="#">
                  {" "}
                  <button className="btn1">Каталог</button>
                </a>
              </div>
              <div>
                <p className="p1">LEANGROUP - тубы и этикетки</p>
                <p className="p2">Ламинатные тубы</p>
                <p className="p3">
                  Используются для производства зубных паст. Широко применяются
                  в сегменте косметики, пищевой индустрии, парафармацевтике,
                  бытовой химии и DIY (Do-it-Yourself).
                </p>
                <a href="#">
                  {" "}
                  <button className="btn1">Каталог</button>
                </a>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
