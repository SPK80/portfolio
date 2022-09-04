import React from "react";
import {Skill} from "./skill/Skill";
import {ContainerWithTitle} from "../common/components/ContainerWithTitle/ContainerWithTitle";

type SkillData = {
    title: string
    description: string
}

const skillsData: SkillData[] = [
    {
        title: "JS&TS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
        title: "CSS",
        description: "Autem culpa dolor ducimus earum expedita impedit labore magnam molestiae, natus obcaecati.",
    },
    {
        title: "React",
        description: "Perferendis provident quos recusandae rem sapiente sed tempora voluptas voluptatibus.",
    },
    {
        title: "Redux",
        description: "Perferendis provident quos recusandae rem sapiente sed tempora voluptas voluptatibus. Perferendis provident quos recusandae rem sapiente sed tempora voluptas voluptatibus. Perferendis provident quos recusandae rem sapiente sed tempora voluptas voluptatibus.",
    },
]

export const Skills = () =>
    <ContainerWithTitle title="Skills" id="skills">
        {
            skillsData.map((sd, index) =>
                <Skill
                    key={index}
                    title={sd.title}
                >{sd.description}
                </Skill>
            )
        }
    </ContainerWithTitle>