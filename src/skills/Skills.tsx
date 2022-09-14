import React from "react";
import {Skill} from "./skill/Skill";
import {ContainerWithTitle} from "../common/components/ContainerWithTitle/ContainerWithTitle";
import {skillsData} from "../bll/skillsData";

export const Skills = () =>
    <ContainerWithTitle
        title="Skills"
        subTitle="I regularly improve my skills"
        thesis="Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen derit in voluptate"
        id="skills"
        style={{marginBottom: 190}}
        contentStyle={{marginTop: 77}}
    >
        {
            skillsData.map((sd, index) =>
                <Skill
                    key={index}
                    skillData={sd}
                />
            )
        }
    </ContainerWithTitle>