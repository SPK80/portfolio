import React from "react";
import s from './main.module.css'
import sContainer from '../common/styles/container.module.css'
import photo from '../assets/photo.jpg'

export const Main = () =>
    <div id="main" className={s.main}>
        <div className={sContainer.container}>
            <div className={s.text}>
                <h3 className={s.hello}>Hi!</h3>
                <h3 className={s.name}>I am Pavel Sukonkin</h3>
                <h3 className={s.job}>A front-end developer</h3>
            </div>
            <img className={s.photo} src={photo} alt={'photo'}/>
        </div>
    </div>