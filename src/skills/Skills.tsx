import React from "react";
import {Skill} from "./skill/Skill";
import {ContainerWithTitle} from "../common/components/ContainerWithTitle/ContainerWithTitle";
import {skillsData} from "../bll/skillsData";

export const Skills = () =>
    <ContainerWithTitle title="Skills" id="skills">
        {
            skillsData.map((sd, index) =>
                <Skill
                    key={index}
                    skillData={sd}
                />
            )
        }
    </ContainerWithTitle>