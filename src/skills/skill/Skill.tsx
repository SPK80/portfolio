import React, {CSSProperties, ReactNode} from "react";
import s from './skill.module.scss'

type SkillPropsType = {
    title: string
    iconStyle?: CSSProperties | undefined;
    children: ReactNode
}

export const Skill: React.FC<SkillPropsType> =
    ({
         title,
         iconStyle,
         children,
     }) =>
        <div className={s.skill}>
            <div style={iconStyle}></div>
            <h3 className={s.title}>{title}</h3>
            <p className={s.description}>{children}</p>
        </div>