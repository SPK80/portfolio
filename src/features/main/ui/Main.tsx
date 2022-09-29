import React from "react";
import s from './main.module.scss'
import photo from './assets/photo.jpg'
import {BoundingContainer} from "common/components/boundingContainer/BoundingContainer";
import {NumberYears} from "./components/numberYears/NumberYears";
import {NumberProjects} from "./components/numberProjects/NumberProjects";
import {Success} from "./components/success/Success";

export const Main = () =>
  <div className={s.container}>
    <BoundingContainer>
      <div className={s.contentWrap}>
        <div className={s.textWrap}>
          <div className={s.hello}>Hello I'm</div>
          <div className={s.name}>Pavel Sukonkin</div>
          <div className={s.job}>A front-end developer</div>
          <div className={s.text}>Jodi kokhono vul hoye jai tumi oporadh nio na ptate velit esse cillum dolore</div>
          <div className={s.buttons}>
            <a href="cv" download>Download CV</a>
            <a href="#about">About Me</a>
          </div>
        </div>
        <div className={s.photo}>
          <img src={photo} alt=""/>
          <NumberYears amount={2}/>
          <Success/>
          <NumberProjects amount={10}/>
        </div>
      </div>
    </BoundingContainer>
  </div>