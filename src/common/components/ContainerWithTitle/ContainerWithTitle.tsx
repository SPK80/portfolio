import React, {CSSProperties, ReactNode} from "react";
import {Title} from "../title/Title";
import s from "./containerWithTitle.module.scss";

export const ContainerWithTitle: React.FC<{
    title: string,
    children: ReactNode,
    id?: string,
    contentStyle?: CSSProperties | undefined
}> = ({title, children, id, contentStyle}) =>
    <div id={id} className={s.container}>
        <Title>{title}</Title>
        <div style={contentStyle} className={s.contentContainer}>{children}</div>
    </div>