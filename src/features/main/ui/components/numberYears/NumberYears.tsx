import React from "react";
import s from "./numberYears.module.scss";

export const NumberYears: React.FC<{ amount: number }> = ({amount}) => {
  return (
    <div className={s.numberYears}>
      <h3>{amount}</h3>
      <span>Years of<br/>Success</span>
    </div>
  )
}