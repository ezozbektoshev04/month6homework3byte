import React, { Component } from "react";
import "./Information.scss";
import { image15, image16 } from "../../assets/main";

export class Information extends Component {
  render() {
    return (
      <section className="information">
        <div className="information-content container">
          <p className="p1">
            Получить подробную <span className="sp1">информацию</span>
          </p>
          <p className="p2">
            Просто заполните форму, наш менеджер свяжется с вами в ближайшее
            время
          </p>
          <form>
            <div className="fielsTwo">
              <div className="filed1">
                <img src={image15} alt="" />
                <input
                  type="text"
                  className="input1"
                  placeholder="Ваше имя"
                  name="name"
                />
              </div>
              <div className="filed1">
                <img src={image16} alt="" />
                <input
                  type="tel"
                  className="input1"
                  placeholder="+375 (29) 0000000"
                  name="number"
                />
              </div>
            </div>
            <textarea
              name="note"
              id="note"
              className="note"
              placeholder="Комментарий"
            ></textarea>
            <button className="btn4" type="submit">
              Получить информацию
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Information;
