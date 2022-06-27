import React from "react";
import s from './skill.module.css'

type SkillPropsType = {
    title: string
    description: string
    iconClass?: string
}

export const Skill: React.FC<SkillPropsType> =
    ({
         title,
         description,
         iconClass,
     }) => (
        <div className={s.skill}>
            <div className={iconClass}></div>
            <h3>{title}</h3>
            <span>{description}</span>
        </div>
    )