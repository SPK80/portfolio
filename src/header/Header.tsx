import React, {RefObject} from "react";
import s from './header.module.scss'
import {TopMenu} from "./topMenu/TopMenu";
import {HamburgerMenu} from "./hamburgerMenu/HamburgerMenu";

type PropsType = {
    sectionsRefs: { [sectionAnchor: string]: RefObject<HTMLDivElement> }
}

export const Header: React.FC<PropsType> = ({sectionsRefs}) => {

    const onClickLinkHandler = (href: string) => {
        const anchor = href.slice(href.lastIndexOf('#') + 1)
        window.scroll({
            top: (sectionsRefs[anchor]?.current?.offsetTop ?? 0) - 80,
            behavior: "smooth",
        })
    }

    return <header className={s.header}>
        <TopMenu onClickLink={onClickLinkHandler}/>
        <HamburgerMenu onClickLink={onClickLinkHandler}/>
    </header>
}