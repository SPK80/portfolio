import React, {useState} from 'react';
import s from "./hamburgerMenu.module.scss"
import {NavLinks} from "../navLinks/NavLinks";

export const HamburgerMenu: React.FC = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    const onLinkClick = () => setMenuOpened(false)
    return (
        <div className={s.hamburgerMenu}>
            <input
                type="checkbox"
                id="#toggle"
                className={s.menu__toggle}
                checked={menuOpened}
                onChange={e => setMenuOpened(e.target.checked)}
            />
            <label className={s.menu__btn} htmlFor="toggle">
                <span></span>
            </label>
            <NavLinks className={s.menu__box} onClick={onLinkClick}/>
        </div>
    )
}