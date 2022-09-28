import React from "react";
import s from './footer.module.scss'
import {BoundingContainer} from "../../../common/components/boundingContainer/BoundingContainer";

export const Footer = () => (
  <div className={s.container}>
    <BoundingContainer>
      <div className={s.content}>
        <div className={s.copyright}>Developed by SPK80 © 2022 All Rights Reserved</div>
      </div>
    </BoundingContainer>
  </div>

)