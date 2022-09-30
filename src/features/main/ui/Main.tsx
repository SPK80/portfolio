import React from "react";
import s from './main.module.scss'
import photo from './assets/photo.jpg'
import {BoundingContainer} from "common/components/boundingContainer/BoundingContainer";
import {NumberYears} from "./components/numberYears/NumberYears";
import {NumberProjects} from "./components/numberProjects/NumberProjects";
import {Success} from "./components/success/Success";
import {Counter} from "./components/counter/Counter";
import {Link} from "../../../common/components/Link/Link";

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
            <Link href="cv">Download CV</Link>
            <Link href="#about">About Me</Link>
          </div>
        </div>
        <div className={s.photo}>
          <img src={photo} alt=""/>
          <Counter until={2} ms={500} counting={NumberYears}/>
          <Success/>
          <Counter until={10} ms={100} counting={NumberProjects}/>
        </div>
      </div>
    </BoundingContainer>
  </div>