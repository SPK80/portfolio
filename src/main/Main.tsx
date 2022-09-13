import React from "react";
import s from './main.module.scss'
import photo from '../assets/photo.jpg'

export const Main = () =>
    <div id="main" className={s.mainContainer}>
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
        <img
            className={s.photo}
            src={photo}
            alt={'photo'}
        />
    </div>