import React from "react";
import s from './main.module.scss'
import photo from '../assets/photo.jpg'

export const Main = () =>
    <div id="main" className={s.mainContainer}>
        <div className={s.text}>
            <h3 className={s.hello}>Hi!</h3>
            <h3 className={s.name}>I am Pavel Sukonkin</h3>
            <h3 className={s.job}>A front-end developer</h3>
        </div>
        <img className={s.photo} src={photo} alt={'photo'}/>
    </div>