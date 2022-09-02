import React, {ReactNode} from "react";
import s from "./title.module.css";

export const Title: React.FC<{ children: ReactNode }> = ({children}) =>
    <div className={s.title}>{children}</div>