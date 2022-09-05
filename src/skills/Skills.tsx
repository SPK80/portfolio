import React from "react";
import {Skill} from "./skill/Skill";
import {ContainerWithTitle} from "../common/components/ContainerWithTitle/ContainerWithTitle";
import {IconType} from "react-icons/lib";

type SkillData = {
    title: string
    description: string
    icon: string
}

const skillsData: SkillData[] = [
    {
        title: "JS/TS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        icon: 'SiJavascript',
    },
    {
        title: "CSS/SASS",
        description: "Autem culpa dolor ducimus earum expedita impedit labore magnam molestiae, natus obcaecati.",
        icon: 'SiCss3',
    },
    {
        title: "React",
        description: "Perferendis provident quos recusandae rem sapiente sed tempora voluptas voluptatibus.",
        icon: 'SiReact',
    },
    {
        title: "Redux",
        description: "Perferendis provident quos recusandae rem sapiente sed tempora voluptas voluptatibus. Perferendis provident quos recusandae rem sapiente sed tempora voluptas voluptatibus. Perferendis provident quos recusandae rem sapiente sed tempora voluptas voluptatibus.",
        icon: 'SiRedux',
    },
]

export const Skills = () =>
    <ContainerWithTitle title="Skills" id="skills">
        {
            skillsData.map((sd, index) => {
                    const icon = require('react-icons/si')[sd.icon] as IconType
                    return <Skill
                        key={index}
                        title={sd.title}
                        description={sd.description}
                        iconJSX={icon({})}
                    />
                }
            )
        }
    </ContainerWithTitle>