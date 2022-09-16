import React from "react";

export const NavLinks: React.FC<{ className?: string | undefined }> = ({className}) =>
    <ul className={className}>
        <li><a href={"#main"}>Home</a></li>
        <li><a href={"#skills"}>Skills</a></li>
        <li><a href={"#projects"}>Projects</a></li>
        <li><a href={"#contacts"}>Contacts</a></li>
    </ul>