import React, {useRef} from 'react';
import s from './app.module.scss';
import {Header} from "features/header";
import {Main} from "features/main";
import {Skills} from "features/skills";
import {Projects} from "features/projects";
import {Contacts} from "features/contacts";
import {Footer} from "features/footer";
import {BoundingContainer} from "common/components/boundingContainer/BoundingContainer";
import {SkillsRightDecor, ProjectsLeftDecor, ContactsLeftDecor, ContactsRightDecor} from "./decors";

export const App = () => {
  
  const sectionsRefs = {
    main: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contacts: useRef<HTMLDivElement>(null),
  }
  
  return (
    <div className={s.app}>
      <Header sectionsRefs={sectionsRefs}/>
      
      <div ref={sectionsRefs.main} className={s.sectionContainer}>
        <Main/>
      </div>
      
      <div ref={sectionsRefs.skills} className={s.sectionContainer}>
        <BoundingContainer style={{marginBottom: 190}}>
          <SkillsRightDecor/>
          <Skills/>
        </BoundingContainer>
      </div>
      
      <div ref={sectionsRefs.projects} className={s.sectionContainer}>
        <ProjectsLeftDecor/>
        <BoundingContainer style={{marginBottom: 190}}>
          <Projects/>
        </BoundingContainer>
      </div>
      
      <div ref={sectionsRefs.contacts} className={s.sectionContainer}>
        <BoundingContainer style={{marginBottom: 190}}>
          <Contacts/>
          <ContactsLeftDecor/>
          <ContactsRightDecor/>
        </BoundingContainer>
      </div>
      
      <Footer/>
    </div>
  )
}