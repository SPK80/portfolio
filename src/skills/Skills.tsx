import React from "react";
import s from './skills.module.css'
import sContainer from '../common/styles/container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

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

export const Skills = () => (
    <div id="skills" className={s.skillsBlock}>
        <div className={`${sContainer.container} ${s.skillsContainer}`}>
            <Title>Skills</Title>
            <div className={s.skills}>
                {
                    skillsData.map((sd, index) =>
                        <Skill
                            key={index}
                            title={sd.title}
                        >{sd.description}
                        </Skill>
                    )}
            </div>
        </div>
    </div>
)