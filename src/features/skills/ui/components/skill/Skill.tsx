import React from "react";
import s from './skill.module.scss'
import {SkillDataType} from "common/bll/skillsData";

export const Skill: React.FC<{ skillData: SkillDataType }> = ({skillData}) =>
  <div className={s.skill}>
    <span className={s.title}>{skillData.title}</span>
    <span className={s.number}>55%</span>
    <div className={s.skillProgress}>
      <div className={s.skillProgressInner}></div>
    </div>
  </div>