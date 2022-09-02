import React, {ReactNode} from "react";
import s from './skill.module.css'

type SkillPropsType = {
    title: string
    iconClass?: string,
    children: ReactNode,
}

export const Skill: React.FC<SkillPropsType> =
    ({
         title,
         iconClass,
         children

     }) =>
        <div className={s.skill}>
            <div className={iconClass}></div>
            <h3>{title}</h3>
            <p>{children}</p>
        </div>