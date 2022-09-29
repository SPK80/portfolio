import React from "react";
import s from "./numberProjects.module.scss";

export const NumberProjects: React.FC<{ amount: number }> = ({amount}) => {
  return (
    <div className={s.numberProjects}>
      <h3>
        <span>{amount}</span>
        <span>+</span>
      </h3>
      <span>Projects<br/>Completed</span>
    </div>
  )
}