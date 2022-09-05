import React from "react";
import {Skill} from "./skill/Skill";
import {ContainerWithTitle} from "../common/components/ContainerWithTitle/ContainerWithTitle";
import {SiCss3, SiJavascript, SiSass, SiTypescript, SiReact, SiRedux} from "react-icons/si";
import {IconType} from "react-icons/lib";

type SkillData = {
    title: string
    description: string
    icons: IconType[]
}

const skillsData: SkillData[] = [
    {
        title: "JS/TS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        icons: [props => <SiJavascript {...props}/>, props => <SiTypescript{...props}/>],
    },
    {
        title: "CSS/SASS",
        description: "Autem culpa dolor ducimus earum expedita impedit labore magnam molestiae, natus obcaecati.",
        icons: [props => <SiCss3{...props}/>, props => <SiSass{...props}/>],
    },
    {
        title: "React",
        description: "Perferendis provident quos recusandae rem sapiente sed tempora voluptas voluptatibus.",
        icons: [props => <SiReact{...props}/>],
    },
    {
        title: "Redux",
        description: "Perferendis provident quos recusandae rem sapiente sed tempora voluptas voluptatibus. Perferendis provident quos recusandae rem sapiente sed tempora voluptas voluptatibus. Perferendis provident quos recusandae rem sapiente sed tempora voluptas voluptatibus.",
        icons: [props => <SiRedux{...props}/>],
    },
]

export const Skills = () =>
    <ContainerWithTitle title="Skills" id="skills">
        {

            skillsData.map((sd, index) =>
                <Skill
                    key={index}
                    title={sd.title}
                >
                    {sd.icons[0]({size: 30, style: {display: "block", textAlign: "center"}})}
                    {sd.description}
                </Skill>
            )
        }
    </ContainerWithTitle>