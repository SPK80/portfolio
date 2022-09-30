import React from "react";
import s from "./contactsForm.module.scss"
import {SubmitButton} from "common/components/SubmitButton/SubmitButton";

export const ContactsForm: React.FC = () =>
  <div className={s.contactsForm}>
    <form action="src/features/contacts/ui/components/ContactsForm/ContactsForm">
      <input type="text" name="name" placeholder="Name"/>
      <input type="text" name="email" placeholder="Email"/>
      <textarea name="message" placeholder="Message"></textarea>
      <SubmitButton>
        Send
      </SubmitButton>
    </form>
  </div>