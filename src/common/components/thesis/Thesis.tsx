import React, {ReactNode} from "react";
import s from "./thesis.module.scss";

export const Thesis: React.FC<{ children: ReactNode }> = ({children}) =>
    <div className={s.thesis}>{children}</div>