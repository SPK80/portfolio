import React, {CSSProperties, ReactNode} from "react";
import {Title} from "../title/Title";
import s from "./containerWithTitle.module.scss";

export const ContainerWithTitle: React.FC<{
    title: string,
    children: ReactNode,
    id?: string,
    contentStyle?: CSSProperties | undefined
    className?: string | undefined;
    
}> = ({title, children, id, contentStyle, className}) =>
    <div id={id} className={`${s.container} ${className}`}>
        <Title>{title}</Title>
        <div style={contentStyle} className={s.contentContainer}>{children}</div>
    </div>