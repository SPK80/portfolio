import React from "react";
import {Project} from "./project/Project";
import {ContainerWithTitle} from "../common/components/ContainerWithTitle/ContainerWithTitle";

export const Projects = () => (
    <ContainerWithTitle title="Projects" id="projects">
        <Project title={"Samurai-way"} description={"Social network"}/>
        <Project title={"Todolist"} description={"Todo list"}/>
        <Project title={"Counter"} description={"Counter"}/>
    </ContainerWithTitle>
)