import React from "react";
import s from './contacts.module.scss'
import {ContactItem} from "./ContactItem/ContactItem";
import {ContactsForm} from "./ContactsForm/ContactsForm";

export const Contacts = () => (
    <div id="contacts" className={s.contactsContainer}>
        <div className={s.encouragement}>
            <div>Lets contact</div>
            <div>Drop Me a Line</div>
        </div>
        <div className={s.formAndInfoContainer}>
            <ContactsForm/>
            <div style={{width: "50%", paddingLeft: 100}}>
                <ContactItem title="Email">
                    psukonkin@gmail.com
                </ContactItem>
                <ContactItem title="Phone">
                    +123 4567890
                </ContactItem>
                <ContactItem title="Location">
                    Earth
                </ContactItem>
            </div>
        </div>
    </div>
)