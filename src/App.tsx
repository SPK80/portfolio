import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {RemoteWork} from "./remoteWork/RemoteWork";
import {Contacts} from "./contacts/Contacts";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Main/>
                <Skills/>
                <Projects/>
                <RemoteWork/>
                <Contacts/>
            </div>
        );
    }
}

export default App;
