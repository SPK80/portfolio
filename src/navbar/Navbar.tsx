import React from "react";
import s from './navbar.module.css'

export const Navbar = () =>
    <nav className={s.navbar}>
        <a href={"#main"}>Main</a>
        <a href={"#skills"}>Skills</a>
        <a href={"#projects"}>Projects</a>
        <a href={"#contacts"}>Contacts</a>
    </nav>