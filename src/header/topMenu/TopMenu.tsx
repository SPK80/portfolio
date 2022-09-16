import React from 'react';
import s from "./topMenu.module.scss"
import {NavLinks} from "../navLinks/NavLinks";

export const TopMenu: React.FC = () =>
    <div className={s.topMenu}>
        <NavLinks className={s.menuBox}/>
    </div>