import React from "react";
import s from "./contactsInfo.module.scss";
import {ContactItem} from "../ContactItem/ContactItem";

export const ContactsInfo: React.FC = () =>
    <div className={s.contactsInfo}>
        <ContactItem title="Email">
            <a href="mailto:psukonkin@gmail.com">psukonkin@gmail.com</a>
        </ContactItem>
        <ContactItem title="Phone">
            <a href="tel:+1234567890">+123 4567890</a>
        </ContactItem>
        <ContactItem title="Linkedin">
            <a href="https://www.linkedin.com/in/sukonkin/">sukonkin</a>
        </ContactItem>
        <ContactItem title="Location">
            Earth
        </ContactItem>
    </div>