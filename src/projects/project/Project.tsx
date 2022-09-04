import React from "react";
import s from './project.module.scss'

type SkillPropsType = {
    title: string
    description: string
}

export const Project: React.FC<SkillPropsType> = ({title, description}) =>
    <div className={s.project}>
        <div>
            <a href="#">Show</a>
        </div>
        <h3>{title}</h3>
        <span>{description}</span>
    </div>