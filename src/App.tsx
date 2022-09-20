import React, {useRef} from 'react';
import s from './app.module.scss';

import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

const App = () => {

    const sectionsRefs = {
        main: useRef<HTMLDivElement>(null),
        skills: useRef<HTMLDivElement>(null),
        projects: useRef<HTMLDivElement>(null),
        contacts: useRef<HTMLDivElement>(null),
    }

    return (
        <div className={s.app}>
            <Header sectionsRefs={sectionsRefs}/>
            <div ref={sectionsRefs.main}><Main/></div>
            <div ref={sectionsRefs.skills}><Skills/></div>
            <div ref={sectionsRefs.projects}><Projects/></div>
            <div ref={sectionsRefs.contacts}><Contacts/></div>
            <Footer/>
        </div>
    )
}

export default App;