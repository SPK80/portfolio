import React, {ReactNode} from "react";
import s from './navLinks.module.scss'

export const NavLinks: React.FC<{ onClick?: (href: string) => void }> = ({onClick}) => {
    const onClickHandler = (href: string) => {
        if (onClick) onClick(href)
    }

    return <ul className={s.navLinks}>
        <li><NavLink href={"#main"} onClick={onClickHandler}>Home</NavLink></li>
        <li><NavLink href={"#skills"} onClick={onClickHandler}>Skills</NavLink></li>
        <li><NavLink href={"#projects"} onClick={onClickHandler}>Projects</NavLink></li>
        <li><NavLink href={"#contacts"} onClick={onClickHandler}>Contacts</NavLink></li>
    </ul>
}

const NavLink: React.FC<{ href: string, onClick: (href: string) => void, children: ReactNode }> =
    ({href, onClick, children}) => {

        const onClickHandler = () => onClick(href)
        return <a onClick={onClickHandler}>{children}</a>
    }