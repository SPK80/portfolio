import React from "react";
import s from './main.module.css'
import sContainer from '../common/styles/container.module.css'

export const Main = () =>
    <div id="main" className={s.main}>
        <div className={sContainer.container}>
            <div className={s.text}>
                <span>Hi!</span>
                <h2>I am Pavel Sukonkin</h2>
                <span>A front-end developer</span>
            </div>
            <div className={s.photo}>
            
            </div>
        </div>
    </div>