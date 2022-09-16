import React from 'react';
import s from "./navMenu.module.scss"

export const NavMenu: React.FC = () => {
    return (
        <div className={s.hamburgerMenu}>
            <input id="#toggle" className={s.menu__toggle} type="checkbox"/>
            <label className={s.menu__btn} htmlFor="toggle">
                <span></span>
            </label>
            
            <ul className={s.menu__box}>
                <li><a href={"#main"}>Home</a></li>
                <li><a href={"#skills"}>Skills</a></li>
                <li><a href={"#projects"}>Projects</a></li>
                <li><a href={"#contacts"}>Contacts</a></li>
            
            </ul>
        </div>
    )
}