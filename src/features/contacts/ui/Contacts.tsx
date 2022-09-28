import React from "react";
import s from './contacts.module.scss'
import {ContactsForm} from "../components/ContactsForm/ContactsForm";
import {ContactsInfo} from "../components/ContactsInfo/ContactsInfo";
import {BoundingContainer} from "../../../common/components/boundingContainer/BoundingContainer";

export const Contacts = () =>
  <div className={s.container}>
    <BoundingContainer>
      <div className={s.title}>
        <div>Let's connect</div>
        <div>Drop Me a Line</div>
      </div>
      <div className={s.formAndInfoContainer}>
        <ContactsForm/>
        <ContactsInfo/>
      </div>
    </BoundingContainer>
  </div>