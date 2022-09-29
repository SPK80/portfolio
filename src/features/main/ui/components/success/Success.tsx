import React from "react";
import s from "./success.module.scss";
import success from "./assets/cup.svg";

export const Success: React.FC = () => {
  return (
    <div className={s.success}>
      <img src={success} alt=""/>
    </div>
  )
}