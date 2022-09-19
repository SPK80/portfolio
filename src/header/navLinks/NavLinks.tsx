import React from "react";
import s from './navLinks.module.scss'

type PropsType = {
    onClick?: () => void
}

export const NavLinks: React.FC<PropsType> = ({onClick}) =>
    <ul className={s.navLinks}>
        <li><a href={"#main"} onClick={onClick}>Home</a></li>
        <li><a href={"#skills"} onClick={onClick}>Skills</a></li>
        <li><a href={"#projects"} onClick={onClick}>Projects</a></li>
        <li><a href={"#contacts"} onClick={onClick}>Contacts</a></li>
    </ul>