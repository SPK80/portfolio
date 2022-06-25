import React from "react";
import s from './navbar.module.css'

export const Navbar = () =>
    <nav className={s.navbar}>
        <a href="#">Main</a>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
        <a href="#">Contacts</a>
    </nav>