import React from "react";
import {Project} from "./project/Project";
import {ContainerWithTitle} from "../common/components/ContainerWithTitle/ContainerWithTitle";
import {projectsData} from "../bll/projectsData";

export const Projects = () =>
    <ContainerWithTitle
        title="Projects"
        subTitle="Checkout My Recent Projects"
        thesis="Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen derit in voluptate"
        id="projects"
        style={{marginBottom: 190}}
        contentStyle={{marginTop: 77}}
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