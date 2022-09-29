import React from "react";
import s from './project.module.scss'
import {ProjectDataType} from "common/bll/projectsData";

export const Project: React.FC<{ projectData: ProjectDataType }> =
  ({projectData}) => (
    <div className={s.project}>
      <a
        className={s.image}
        style={{backgroundImage: `url(${require('common/assets/' + projectData.image)})`}}
        href={projectData.deployment}
      >
      </a>
      <div className={s.title}>{projectData.title}</div>
      <div className={s.description}>{projectData.description}</div>
    </div>
  )