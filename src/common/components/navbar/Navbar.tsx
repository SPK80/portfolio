import React, {useState} from "react";
import s from './navbar.module.scss'
import {FiMenu} from "react-icons/fi";

export const LaptopNavbar = () => {
    const [isMenuHidden, setIsMenuHidden] = useState(true)

    const onClickHandler = () => {
        setIsMenuHidden(false)
    }

    return isMenuHidden
        ? <button onClick={onClickHandler}><FiMenu/></button>
        : <NavMenu/>
}

export const DesktopNavbar = () => <NavMenu/>

const NavMenu: React.FC = () =>
    <nav className={s.navMenu}>
        <a href={"#main"}>Main</a>
        <a href={"#skills"}>Skills</a>
        <a href={"#projects"}>Projects</a>
        <a href={"#contacts"}>Contacts</a>
    </nav>