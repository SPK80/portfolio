import React, {ReactNode} from "react";
import s from './skill.module.scss'

type SkillPropsType = {
    title: string
    iconClass?: string
    children: ReactNode
}

export const Skill: React.FC<SkillPropsType> =
    ({
         title,
         iconClass,
         children,
     }) =>
        <div className={s.skill}>
            <div className={iconClass}></div>
            <h3 className={s.title}>{title}</h3>
            <p className={s.description}>{children}</p>
        </div>