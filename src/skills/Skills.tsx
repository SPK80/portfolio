import React from "react";
import {Skill} from "./skill/Skill";
import {ContainerWithTitle} from "../common/components/ContainerWithTitle/ContainerWithTitle";
import {skillsData} from "../bll/skillsData";
import s from "./skills.module.scss"

export const Skills = () =>
    <ContainerWithTitle
        title="Skills"
        subTitle="I regularly improve my skills"
        thesis="Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen derit in voluptate"
        id="skills"
        className={s.skills}
        contentClassName={s.content}
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