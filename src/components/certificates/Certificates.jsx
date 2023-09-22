import React, { Component } from "react";
import Slider from "react-slick";
import "./Certificates.scss";
import { image6, image7, image8, image9, image5 } from "../../assets/main";

export class Certificates extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section className="certificates">
        <div className="container">
          <p className="p1">
            Качество продукции подтверждают{" "}
            <span className="sp2">сертификаты</span>
          </p>
          <Slider {...settings}>
            <div className="d1">
              <div className="img-div">
                <img src={image5} alt="" />
              </div>
            </div>
            <div className="d1">
              <div className="img-div">
                <img src={image6} alt="" />
              </div>
            </div>
            <div className="d1">
              <div className="img-div">
                <img src={image7} alt="" />
              </div>
            </div>
            <div className="d1">
              <div className="img-div">
                <img src={image8} alt="" />
              </div>
            </div>
            <div className="d1">
              <div className="img-div">
                <img src={image9} alt="" />
              </div>
            </div>
            <div className="d1">
              <div className="img-div">
                <img src={image5} alt="" />
              </div>
            </div>
            <div className="d1">
              <div className="img-div">
                <img src={image6} alt="" />
              </div>
            </div>
            <div className="d1">
              <div className="img-div">
                <img src={image7} alt="" />
              </div>
            </div>
            <div className="d1">
              <div className="img-div">
                <img src={image8} alt="" />
              </div>
            </div>
            <div className="d1">
              <div className="img-div">
                <img src={image9} alt="" />
              </div>
            </div>
            <div className="d1">
              <div className="img-div">
                <img src={image5} alt="" />
              </div>
            </div>
            <div className="d1">
              <div className="img-div">
                <img src={image6} alt="" />
              </div>
            </div>
            <div className="d1">
              <div className="img-div">
                <img src={image7} alt="" />
              </div>
            </div>
            <div className="d1">
              <div className="img-div">
                <img src={image8} alt="" />
              </div>
            </div>
            <div className="d1">
              <div className="img-div">
                <img src={image9} alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}

export default Certificates;
