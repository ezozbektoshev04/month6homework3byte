import React, { Component } from "react";
import "./About.scss";
import { image4 } from "../../assets/main";

export class About extends Component {
  render() {
    return (
      <section className="about">
        <div className="container about-content">
          <p className="p1">
            О компании <span className="sp1">LEANGROUP</span>
          </p>
          <div className="d3">
            <div className="d1">
              <img src={image4} alt="" className="img4" />
            </div>
            <div className="d2">
              <p className="p2">
                {" "}
                Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и
                на сегодняшний день является ведущей компанией по производству
                ламинатных и экструзионных туб. <br /> <br /> Имея две
                технологии – для производства ламинатных и экструзионных туб, мы
                предлагаем вам широкий спектр возможностей. Большим
                преимуществом является собственный печатный цех в ламинате и
                in-line печать в экструзии с возможностью различных
                дополнительных опций декора. Особое внимание уделяется работе с
                поставщиками для контроля и поддержания качества производимой
                нами продукции. <br /> <br /> С января 2018 года компания стала
                членом Европейской Ассоциации производителей туб (ETMA), что
                подтверждает сильную позицию бренда и на рынке Европы.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
