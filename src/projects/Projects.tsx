import React from "react";
import {Project} from "./project/Project";
import {ContainerWithTitle} from "../common/components/ContainerWithTitle/ContainerWithTitle";

type  ProjectDataType = {
    title: string
    description: string
    image: string
}

export const Projects = () => {
    const projectsData: ProjectDataType[] = [
        {
            title: "Samurai-way",
            description: "Social network",
            image: "social-network.jpg",
        },
        {
            title: "Todolist",
            description: "Todo list",
            image: "todolist.jpg",
        },
        {
            title: "Counter",
            description: "Counter",
            image: "counter.jpg",
        },
    ]
    
    return (
        <ContainerWithTitle title="Projects" id="projects">
            {
                projectsData.map(pd =>
                    <Project
                        style={{backgroundImage: `url(${require('../assets/' + pd.image)})`}}
                        title={pd.title}
                        description={pd.description}
                    />
                )
            }
        </ContainerWithTitle>
    )
}