import React from "react";
import s from './remoteWork.module.css'
import sContainer from '../common/styles/container.module.css'

export const RemoteWork = () => (
    <div id="remoteWork" className={s.remoteWorkBlock}>
        <div className={`${sContainer.container} ${s.remoteWorkContainer}`}>
            <h2>Looking into remote work options</h2>
            <a href="#">Hire me</a>
        </div>
    </div>
)