import React, {RefObject} from "react";
import s from './header.module.scss'
import {TopMenu} from "./components/topMenu/TopMenu";
import {HamburgerMenu} from "./components/hamburgerMenu/HamburgerMenu";

type PropsType = {
  sectionsRefs: { [sectionAnchor: string]: RefObject<HTMLDivElement> }
}

export const Header: React.FC<PropsType> = ({sectionsRefs}) => {
  
  const onClickLinkHandler = (href: string) => {
    const {current} = sectionsRefs[href]
    if (!current) return
    current.scrollIntoView({behavior: "smooth"})
  }
  
  return (
    <header className={s.header}>
      <TopMenu onClickLink={onClickLinkHandler}/>
      <HamburgerMenu onClickLink={onClickLinkHandler}/>
    </header>
  )
}