import React from 'react';
import s from "./hamburgerMenu.module.scss"
import {NavLinks} from "../navLinks/NavLinks";

export const HamburgerMenu: React.FC = () =>
    <div className={s.hamburgerMenu}>
        <input id="#toggle" className={s.menu__toggle} type="checkbox"/>
        <label className={s.menu__btn} htmlFor="toggle">
            <span></span>
        </label>
        <NavLinks className={s.menu__box}/>
    </div>


