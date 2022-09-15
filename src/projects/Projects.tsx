import React from "react";
import {Project} from "./project/Project";
import {ContainerWithTitle} from "../common/components/ContainerWithTitle/ContainerWithTitle";
import {projectsData} from "../bll/projectsData";
import s from "./projects.module.scss"

export const Projects = () =>
    <ContainerWithTitle
        title="Projects"
        subTitle="Checkout My Recent Projects"
        thesis="Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen derit in voluptate"
        id="projects"
        className={s.projects}
        contentClassName={s.content}
    >
        {
            projectsData.map((pd, index) =>
                <Project
                    key={index}
                    projectData={pd}
                />
            )
        }
    </ContainerWithTitle>