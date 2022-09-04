import React from "react";
import s from './contacts.module.scss'
import {ContactsForm} from "./ContactsForm/ContactsForm";
import {ContactsInfo} from "./ContactsInfo/ContactsInfo";

export const Contacts = () =>
    <div id="contacts" className={s.contactsContainer}>
        <div className={s.encouragement}>
            <div>Let's contact</div>
            <div>Drop Me a Line</div>
        </div>
        <div className={s.formAndInfoContainer}>
            <ContactsForm/>
            <ContactsInfo/>
        </div>
    </div>