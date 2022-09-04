import React, {ReactNode} from "react";
import {Title} from "../title/Title";
import s from "./containerWithTitle.module.scss";

export const ContainerWithTitle: React.FC<{
    title: string,
    children: ReactNode,
    id?: string,
}> = ({title, children, id}) =>
    <div id={id} className={s.container}>
        <Title>{title}</Title>
        <div className={s.contentContainer}>{children}</div>
    </div>