import React from "react";

type PropsType = {
    className?: string | undefined
    onClick?: () => void
}

export const NavLinks: React.FC<PropsType> = ({className, onClick}) =>
    <ul className={className}>
        <li><a href={"#main"} onClick={onClick}>Home</a></li>
        <li><a href={"#skills"} onClick={onClick}>Skills</a></li>
        <li><a href={"#projects"} onClick={onClick}>Projects</a></li>
        <li><a href={"#contacts"} onClick={onClick}>Contacts</a></li>
    </ul>