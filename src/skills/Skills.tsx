import React from "react";
import s from './skills.module.css'
import sContainer from '../common/styles/container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => (
    <div id="skills" className={s.skillsBlock}>
        <div className={`${sContainer.container} ${s.skillsContainer}`}>
            <h2>Skills</h2>
            <div className={s.skills}>
                <Skill
                    title={"JS&TS"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                />
                <Skill
                    title={"CSS"}
                    description={"Autem culpa dolor ducimus earum expedita impedit labore magnam molestiae, natus obcaecati."}
                />
                <Skill
                    title={"React"}
                    description={"Perferendis provident quos recusandae rem sapiente sed tempora voluptas voluptatibus."}
                />
                <Skill
                    title={"Redux"}
                    description={"Perferendis provident quos recusandae rem sapiente sed tempora voluptas voluptatibus. Perferendis provident quos recusandae rem sapiente sed tempora voluptas voluptatibus. Perferendis provident quos recusandae rem sapiente sed tempora voluptas voluptatibus."}
                />
            </div>
        </div>
    </div>
)