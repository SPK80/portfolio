import React from "react";
import {Skill} from "./skill/Skill";
import {ContainerWithTitle} from "../common/components/ContainerWithTitle/ContainerWithTitle";
import {skillsData} from "../bll/skillsData";
import s from "./skills.module.scss"

export const Skills = () =>
    <ContainerWithTitle title="Skills" id="skills">
        <div className={s.subTitle}>I regularly improve my skills</div>
        <div className={s.text}>Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen derit in
            voluptate
        </div>
        {
            skillsData.map((sd, index) =>
                <Skill
                    key={index}
                    skillData={sd}
                />
            )
        }
    </ContainerWithTitle>