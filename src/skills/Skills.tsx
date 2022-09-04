import React from "react";
import s from './skills.module.scss'
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
    <div id="skills">
        <Title>Skills</Title>
        <div className={s.skillsContainer}>
            {/*<div style={{width: 150, border: "solid 1px black"}}>1</div>*/}
            {/*<div style={{width: 150, border: "solid 1px black"}}>2</div>*/}
            {/*<div style={{width: 150, border: "solid 1px black"}}>3</div>*/}
            {/*<div style={{width: 150, border: "solid 1px black"}}>4</div>*/}
            
            {
                skillsData.map((sd, index) =>
                    <Skill
                        key={index}
                        title={sd.title}
                    >{sd.description}
                    </Skill>
                )
            }
        </div>
    </div>
)