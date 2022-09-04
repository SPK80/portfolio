import React from "react";
import s from "./contactsForm.module.scss"

export const ContactsForm: React.FC = () =>
    <div className={s.contactsForm}>
        <form action="">
            <input type="text" name="name" placeholder="Name"/>
            <input type="text" name="email" placeholder="Email"/>
            <textarea name="message" placeholder="Message"></textarea>
            <button type={"submit"}>Send</button>
        </form>
    </div>