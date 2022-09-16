import React from "react";
import s from './header.module.scss'
import logo from "../assets/logo.jpg";
import {NavMenu} from "./navMenu/NavMenu";

export const Header = () =>
    <header className={s.header}>
        <div className={s.logo}><img src={logo} alt=""/></div>
        {/*<Navbar/>*/}
        <NavMenu/>
    </header>