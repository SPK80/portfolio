import React from "react";
import s from './footer.module.css'
import sContainer from '../common/styles/container.module.css'

export const Footer = () => (
    <div className={s.footerBlock}>
        <div className={`${sContainer.container} ${s.footerContainer}`}>
            <h2>Pavel Sukonkin</h2>
            <div className={s.footerSquares}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={s.copyright}>Ⓒ 2022 All rights reserved</div>
        </div>
    </div>
)