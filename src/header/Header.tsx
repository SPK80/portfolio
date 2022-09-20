import React from "react";
import s from './header.module.scss'
import {TopMenu} from "./topMenu/TopMenu";
import {HamburgerMenu} from "./hamburgerMenu/HamburgerMenu";

export const Header = () =>
    <header className={s.header}>
        <TopMenu/>
        <HamburgerMenu/>
    </header>