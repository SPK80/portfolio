import React from "react";
import s from "./contactsInfo.module.scss";
import {ContactItem} from "../ContactItem/ContactItem";

export const ContactsInfo: React.FC = () =>
    <div className={s.contactsInfo}>
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