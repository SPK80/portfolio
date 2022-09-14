import React, {CSSProperties, ReactNode} from "react";
import {Title} from "../title/Title";
import s from "./containerWithTitle.module.scss";
import {SubTitle} from "../subTitle/SubTitle";
import {Thesis} from "../thesis/Thesis";

export const ContainerWithTitle: React.FC<{
    title: string,
    subTitle?: string,
    thesis?: string,
    children: ReactNode,
    id?: string,
    contentStyle?: CSSProperties | undefined
    style?: CSSProperties | undefined;
    
}> = ({
          title, subTitle, thesis,
          id, contentStyle, style,
          children
      }) =>
    <div id={id} style={style} className={s.container}>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Thesis>{thesis}</Thesis>
        
        <div style={contentStyle} className={s.contentContainer}>{children}</div>
    </div>