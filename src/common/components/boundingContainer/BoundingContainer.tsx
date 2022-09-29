import React, {CSSProperties, PropsWithChildren} from 'react';
import s from "./boundingContainer.module.scss";

type PropsType = PropsWithChildren & {
  style?: CSSProperties | undefined
}

export const BoundingContainer: React.FC<PropsType> = ({children, style}) =>
  <div style={style} className={s.boundingContainer}>
    {children}
  </div>
