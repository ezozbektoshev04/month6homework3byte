import React, { Component } from "react";
import { image18, image19, image20, image21, image17 } from "../../assets/main";
import "./Team.scss";

export class Team extends Component {
  render() {
    return (
      <section className="team">
        <div className="team-content container">
          <p className="p1">
            Наша <span className="sp1">команда</span>
          </p>
          <div className="team-cards">
            <div className="team-card">
              <img src={image17} alt="" />
              <p className="p2">Войнич Дарья</p>
              <p className="p3">Заместитель директора по продажам</p>
              <p className="p4">+375 (17) 270-53-77 (317)</p>
            </div>
            <div className="team-card">
              <img src={image18} alt="" />
              <p className="p2">Мисько Екатерина</p>
              <p className="p3">Начальник отдела сопровождения</p>
              <p className="p4">+375 (17) 270-53-77 (115)</p>
              <p className="p4"> +375 29 112-73-48</p>
              <p className="p5">k.melnichenko@leangroup.by</p>
            </div>
            <div className="team-card">
              <img src={image19} alt="" />
              <p className="p2">Дмитроченко Дмитрий</p>
              <p className="p3">Начальник отдела допечатной подготовки</p>
              <p className="p4">+375 (17) 270-53-77 (333)</p>
              <p className="p4"> +375 29 360-32-26</p>
              <p className="p5">dmitrochenko@leangroup.by</p>
            </div>
            <div className="team-card">
              <img src={image20} alt="" />
              <p className="p2">Антух Евгений</p>
              <p className="p3">Начальник отдела снабжения</p>
              <p className="p4">+375 (17) 270-53-77 (148)</p>
              <p className="p4"> +375 44 764-16-28</p>
              <p className="p5">j.antuh@leangroup.by</p>
            </div>
            <div className="team-card">
              <img src={image21} alt="" />
              <p className="p2">Мисник Елена</p>
              <p className="p3">Специалист по работе с клиентами</p>
              <p className="p4">+375 (17) 270-53-77 (322)</p>
              <p className="p4"> +375 29 329-34-03</p>
              <p className="p5">e.misnik@leangroup.by</p>
            </div>
          </div>
          <div className="team-btn">
            <a href="#">
              <button className="btn5">Наша команда</button>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
