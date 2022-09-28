import React, {ReactNode} from "react";
import s from './navLinks.module.scss'

export const NavLinks: React.FC<{ onClick?: (href: string) => void }> = ({onClick}) => {
  const onClickHandler = (href: string) => onClick && onClick(href)
  
  return <nav className={s.navLinks}>
    <NavLink href={"main"} onClick={onClickHandler}>Home</NavLink>
    <NavLink href={"skills"} onClick={onClickHandler}>Skills</NavLink>
    <NavLink href={"projects"} onClick={onClickHandler}>Projects</NavLink>
    <NavLink href={"contacts"} onClick={onClickHandler}>Contacts</NavLink>
  </nav>
}

const NavLink: React.FC<{ href: string, onClick: (href: string) => void, children: ReactNode }> =
  ({href, onClick, children}) => {
    
    const onClickHandler = () => onClick(href)
    return <a onClick={onClickHandler}>{children}</a>
  }