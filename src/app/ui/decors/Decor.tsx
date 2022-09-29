import React, {CSSProperties} from "react";
import s from "./decor.module.scss";

export const Decor: React.FC<{
  style: CSSProperties
}> = ({style}) => {
  return (<div style={style} className={s.decor}></div>)
}