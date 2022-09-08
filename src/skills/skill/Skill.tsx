import React from "react";
import s from './skill.module.scss'
import {SkillDataType} from "../../bll/skillsData";

type SkillPropsType = {
    skillData: SkillDataType
}

export const Skill: React.FC<SkillPropsType> = ({skillData}) =>
    <div className={s.skill}>
        <div className={s.icon}>{(require('react-icons/si')[skillData.icon])()}</div>
        <div className={s.title}>{skillData.title}</div>
        <p className={s.description}>{skillData.description}</p>
    </div>