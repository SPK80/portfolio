import React, {ReactNode} from "react";
import s from "./boundingContainer.module.scss";

export const BoundingContainer: React.FC<{ children: ReactNode }> = ({children}) =>
    <div className={s.boundingContainer}>{children}</div>