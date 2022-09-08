import React from "react";
import s from './project.module.scss'
import {ProjectDataType} from "../../bll/projectsData";
import {AiFillGithub} from "react-icons/ai";
import {GrDeploy} from "react-icons/gr";

type ProjectPropsType = {
    projectData: ProjectDataType
}

export const Project: React.FC<ProjectPropsType> = ({projectData}) =>
    <div className={s.project}>
        <div style={{backgroundImage: `url(${require('../../assets/' + projectData.image)})`}}>
            <a className={s.deploymentLink}
               href={projectData.deployment}>
                <GrDeploy title="Deployment"/>
            </a>
        </div>
        <a className={s.repositoryButton}
           href={projectData.repository}>
            <AiFillGithub title="Repository"/>
        </a>
        <h3>{projectData.title}</h3>
        <span>{projectData.description}</span>
    
    </div>