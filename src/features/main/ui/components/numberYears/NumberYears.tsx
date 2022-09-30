import React from "react";
import s from "./numberYears.module.scss";

export const NumberYears: React.FC<{ count: number }> = ({count}) => {
  return (
    <div className={s.numberYears}>
      <h3>{count}</h3>
      <span>Years of<br/>Success</span>
    </div>
  )
}