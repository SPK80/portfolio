import React from "react";
import s from './header.module.scss'
import {Navbar} from "../navbar/Navbar";

export const Header = () =>
    <header className={s.header}>
        <Navbar/>
    </header>