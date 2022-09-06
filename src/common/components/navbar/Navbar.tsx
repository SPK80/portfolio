import React, {useState} from "react";
import s from './navbar.module.scss'
import {GrClose, GrMenu} from "react-icons/gr";

export const Navbar = () =>
    <div className={s.navbar}>
        <div className={s.laptopNavbar}><LaptopNavbar/></div>
        <div className={s.desktopNavbar}><DesktopNavbar/></div>
    </div>


const DesktopNavbar: React.FC = () => <NavMenu/>

const LaptopNavbar: React.FC = () => {
    const [isMenuHidden, setIsMenuHidden] = useState(true)
    
    const onClickHandler = () => {
        setIsMenuHidden(value => !value)
    }
    
    return <>
        {<button onClick={onClickHandler}>{isMenuHidden ? <GrMenu/> : <GrClose/>}</button>}
        {!isMenuHidden && <NavMenu onClick={onClickHandler}/>}
    </>
}

const NavMenu: React.FC<{ onClick?: () => void }> = ({onClick}) =>
    <nav onClick={onClick}>
        <a href={"#main"}>Main</a>
        <a href={"#skills"}>Skills</a>
        <a href={"#projects"}>Projects</a>
        <a href={"#contacts"}>Contacts</a>
    </nav>