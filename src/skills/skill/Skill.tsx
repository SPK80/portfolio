import React, {CSSProperties, ReactNode} from "react";
import s from './skill.module.css'

type SkillPropsType = {
    title: string
    iconClass?: string
    children: ReactNode
    style?: CSSProperties | undefined
}

export const Skill: React.FC<SkillPropsType> =
    ({
         title,
         iconClass,
         children,
         style,
     }) =>
        <div className={s.skill}>
            <div className={iconClass}></div>
            <h3 className={s.title}>{title}</h3>
            <p className={s.description}>{children}</p>
        </div>