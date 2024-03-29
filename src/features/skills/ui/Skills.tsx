import React from "react";
import s from "./skills.module.scss"
import {Title} from "common/components/title/Title";
import {SubTitle} from "common/components/subTitle/SubTitle";
import {skillsData} from "common/bll/skillsData";
import {Skill} from "./components/skill/Skill";
import {Thesis} from "common/components/thesis/Thesis";

export const Skills = () =>
  <div>
    <Title>Skills</Title>
    <SubTitle>I regularly improve my skills</SubTitle>
    <Thesis>Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen derit in voluptate</Thesis>
    <div className={s.skills}>
      {
        skillsData.map((sd, index) =>
          <Skill key={index} skillData={sd}/>)
      }
    </div>
  </div>