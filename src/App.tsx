import React from 'react';
import s from './app.module.scss';

import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

class App extends React.Component {
    render() {
        return (
            <div className={s.app}>
                <Header/>
                <Main/>
                <Skills/>
                <Projects/>
                {/*<RemoteWork/>*/}
                <Contacts/>
                <Footer/>
            </div>
        )
    }
}

export default App;
