import React from "react";
import {Project} from "./project/Project";
import {ContainerWithTitle} from "../common/components/ContainerWithTitle/ContainerWithTitle";
import {projectsData} from "../bll/projectsData";

export const Projects = () =>
    <ContainerWithTitle title="Projects" id="projects">
        {
            projectsData.map((pd, index) =>
                <Project
                    key={index}
                    projectData={pd}
                />
            )
        }
    </ContainerWithTitle>