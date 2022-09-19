import logo from "../../assets/logo.jpg";
import React from "react";
import s from './logo.module.scss'

export const Logo = () =>
    <div className={s.logo}><img src={logo} alt=""/></div>
