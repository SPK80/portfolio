import React, {PropsWithChildren} from 'react';
import s from "./boundingContainer.module.scss";

export const BoundingContainer: React.FC<PropsWithChildren> = ({children}) =>
  <div className={s.boundingContainer}>
    {children}
  </div>
