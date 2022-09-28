import React, {useRef} from 'react';
import s from './app.module.scss';
import {Header} from "../../features/header";
import {Main} from "../../features/main";
import {Skills} from "../../features/skills";
import {Projects} from "../../features/projects";
import {Contacts} from "../../features/contacts";
import {Footer} from "../../features/footer";

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
      <div ref={sectionsRefs.main} className={s.sectionContainer}><Main/></div>
      <div ref={sectionsRefs.skills} className={s.sectionContainer}><Skills/></div>
      <div ref={sectionsRefs.projects} className={s.sectionContainer}><Projects/></div>
      <div ref={sectionsRefs.contacts} className={s.sectionContainer}><Contacts/></div>
      <Footer/>
    </div>
  )
}