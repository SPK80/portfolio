import React from "react";
import s from './project.module.scss'
import {ProjectDataType} from "../../bll/projectsData";
import {AiFillGithub} from "react-icons/ai";

type ProjectPropsType = {
    projectData: ProjectDataType
}

export const Project: React.FC<ProjectPropsType> = ({projectData}) =>
    <a className={s.project} href={projectData.deployment}>
        <div className={s.title}>{projectData.title}</div>
        <div className={s.image}
             style={{backgroundImage: `url(${require('../../assets/' + projectData.image)})`}}></div>
        <div className={s.links}>
            <a href={projectData.deployment} className={s.deployment}><GhDeploymentIcon/></a>
            <a href={projectData.repository} className={s.repository}><AiFillGithub/></a>
        </div>
    </a>

const GhDeploymentIcon = () =>
    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em"
         xmlns="http://www.w3.org/2000/svg">
        <path
            // stroke="#000" stroke-width="2"
            d="M23,1 C23,1 16.471872,0.541707069 14,3 C13.9767216,3.03685748 10,7 10,7 L5,8 L2,10 L10,14 L14,22 L16,19 L17,14 C17,14 20.9631426,10.0232786 21,10 C23.4582929,7.5281282 23,1 23,1 Z M17,8 C16.4475,8 16,7.5525 16,7 C16,6.4475 16.4475,6 17,6 C17.5525,6 18,6.4475 18,7 C18,7.5525 17.5525,8 17,8 Z M7,17 C6,16 4,16 3,17 C2,18 2,22 2,22 C2,22 6,22 7,21 C8,20 8,18 7,17 Z"></path>
    </svg>