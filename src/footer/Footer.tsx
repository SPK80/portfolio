import React from "react";
import s from './footer.module.scss'

export const Footer = () => (
    <div className={s.footerContainer}>
        
        <div className={s.footerSquares}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className={s.copyright}>Developed by SPK80 © 2022</div>
    </div>
)