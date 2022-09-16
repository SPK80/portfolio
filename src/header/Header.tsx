import React from "react";
import s from './header.module.scss'
import logo from "../assets/logo.jpg";
import {TopMenu} from "./topMenu/TopMenu";
import {HamburgerMenu} from "./hamburgerMenu/HamburgerMenu";

export const Header = () =>
    <header className={s.header}>
        <div className={s.logo}><img src={logo} alt=""/></div>
        <TopMenu/>
        <HamburgerMenu/>
    </header>