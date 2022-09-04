import React from "react";
import s from './projects.module.scss'
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";

export const Projects = () => (
    <div id="projects">
        <Title>Projects</Title>
        <div className={s.projectsContainer}>
            <Project title={"Samurai-way"} description={"Social network"}/>
            <Project title={"Todolist"} description={"Todo list"}/>
            <Project title={"Counter"} description={"Counter"}/>
        </div>
    </div>
)