import React from "react";
import s from './project.module.scss'
import {ProjectDataType} from "../../bll/projectsData";

type ProjectPropsType = {
    projectData: ProjectDataType
}

export const Project: React.FC<ProjectPropsType> = ({projectData}) =>
    <div className={s.project}>
        <a
            href={projectData.deployment}
            className={s.image}
            style={{backgroundImage: `url(${require('../../assets/' + projectData.image)})`}}
        >
        </a>
        <div className={s.title}>{projectData.title}</div>
        <div className={s.description}>{projectData.description}</div>
    </div>