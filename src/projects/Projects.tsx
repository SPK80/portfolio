import React from "react";
import s from './projects.module.css'
import sContainer from '../common/styles/container.module.css'
import {Project} from "./project/Project";

export const Projects = () => (
    <div id="projects" className={s.projectsBlock}>
        <div className={`${sContainer.container} ${s.projectsContainer}`}>
            <h2>Projects</h2>
            <div className={s.projects}>
                <Project title={"Samurai-way"} description={"Social network"}/>
                <Project title={"Todolist"} description={"Todo list"}/>
                <Project title={"Counter"} description={"Counter"}/>
            </div>
        </div>
    </div>
)