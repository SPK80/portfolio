import React from "react";
import s from './header.module.scss'
import {Navbar} from "../common/components/navbar/Navbar";
import logo from "../assets/logo.jpg";

export const Header = () =>
    <header className={s.header}>
        <div className={s.logo}><img src={logo} alt=""/></div>
        <Navbar/>
    </header>