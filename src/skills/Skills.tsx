import React from "react";
import {Skill} from "./skill/Skill";
import {ContainerWithTitle} from "../common/components/ContainerWithTitle/ContainerWithTitle";
import {skillsData} from "../bll/skillsData";
import s from "./skills.module.scss"

export const Skills = () =>
    <ContainerWithTitle title="Skills" id="skills">
        <div className={s.skills}>
            {
                skillsData.map((sd, index) =>
                    <Skill
                        key={index}
                        skillData={sd}
                    />
                )
            }
        </div>
    </ContainerWithTitle>