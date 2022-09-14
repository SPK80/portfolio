import React, {ReactNode} from "react";
import s from "./subTitle.module.scss";

export const SubTitle: React.FC<{ children: ReactNode }> = ({children}) =>
    <div className={s.subTitle}>{children}</div>