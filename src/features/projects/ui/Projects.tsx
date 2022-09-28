import React from "react";
import s from "./projects.module.scss"
import {BoundingContainer} from "../../../common/components/boundingContainer/BoundingContainer";
import {Title} from "../../../common/components/title/Title";
import {Thesis} from "../../../common/components/thesis/Thesis";
import {SubTitle} from "../../../common/components/subTitle/SubTitle";
import {projectsData} from "../../../common/bll/projectsData";
import {Project} from "../components/project/Project";

export const Projects = () =>
  <BoundingContainer>
    <Title>Projects</Title>
    <SubTitle>Checkout My Recent Projects</SubTitle>
    <Thesis>Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen derit in voluptate</Thesis>
    <div className={s.projects}>
      {
        projectsData.map((pd, index) =>
          <Project key={index} projectData={pd}/>)
      }
    </div>
  </BoundingContainer>