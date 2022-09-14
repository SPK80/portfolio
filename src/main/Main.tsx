import React from "react";
import s from './main.module.scss'
import photo from '../assets/photo.jpg'
import success from '../assets/cup.svg'

export const Main = () =>
    <div id="main" className={s.mainContainer}>
        <div className={s.mainWrap}>
            <div className={s.textWrap}>
                <div className={s.hello}>Hello I'm</div>
                <div className={s.name}>Pavel Sukonkin</div>
                <div className={s.job}>A front-end developer</div>
                <div className={s.text}>Jodi kokhono vul hoye jai tumi oporadh nio na ptate velit esse cillum dolore
                </div>
                <div className={s.buttons}>
                    <a href="cv" download>Download CV</a>
                    <a href="#about">About Me</a>
                </div>
            </div>
            <div className={s.photo}>
                <img src={photo} alt={'photo'}/>
                <div className={s.numbersYear}><h3>12</h3> <span>Years of<br/>Success</span></div>
                <div className={s.success}><img src={success} alt=""/></div>
                <div className={s.numbersProject}><h3>800</h3><span>+</span><span>Projects<br/>Completed</span></div>
            </div>
        </div>
    </div>