import React from "react";
import s from './skill.module.scss'

type SkillPropsType = {
    title: string
    description: string
    iconJSX: JSX.Element
}

export const Skill: React.FC<SkillPropsType> =
    ({
         title, description, iconJSX
     }) =>
        <div className={s.skill}>
            <div className={s.icon}>{iconJSX}</div>
            <div className={s.title}>{title}</div>
            <p className={s.description}>{description}</p>
        </div>