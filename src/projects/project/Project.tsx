import React, {CSSProperties} from "react";
import s from './project.module.scss'

type SkillPropsType = {
    title: string
    description: string
    style?: CSSProperties | undefined;
}

export const Project: React.FC<SkillPropsType> = ({title, description, style}) =>
    <div className={s.project}>
        <div style={style}>
            <a href="#">Show</a>
        </div>
        <h3>{title}</h3>
        <span>{description}</span>
    </div>