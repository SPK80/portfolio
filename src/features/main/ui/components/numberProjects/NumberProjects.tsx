import React from "react";
import s from "./numberProjects.module.scss";

export const NumberProjects: React.FC<{ count: number }> = ({count}) => {
  return (
    <div className={s.numberProjects}>
      <h3>
        <span>{count}</span>
        <span>+</span>
      </h3>
      <span>Projects<br/>Completed</span>
    </div>
  )
}