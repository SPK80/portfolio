import React, {useState} from 'react';
import s from "./hamburgerMenu.module.scss"
import {NavLinks} from "../navLinks/NavLinks";
import {Logo} from "../logo/Logo";

export const HamburgerMenu: React.FC = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    const onLinkClick = () => setMenuOpened(false)
    
    let buttonClass = s.hamburgerButton;
    let navLinksClass = s.navLinks;
    if (menuOpened) buttonClass = buttonClass + ' ' + s.xButton
    else navLinksClass = navLinksClass + ' ' + s.navLinksHide;
    
    const onButtonClick = () => setMenuOpened(value => !value)
    return (
        <div className={s.hamburgerMenu}>
            <div className={s.topPanel}>
                <Logo/>
                <div
                    className={buttonClass}
                    onClick={onButtonClick}
                ><span></span></div>
            </div>
            
            <div className={navLinksClass}>
                <NavLinks onClick={onLinkClick}/>
            </div>
        </div>
    )
}