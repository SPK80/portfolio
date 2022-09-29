import React from "react";
import s from "./contactsForm.module.scss"
import {Button} from "../../../../../common/components/button/Button";

export const ContactsForm: React.FC = () =>
  <div className={s.contactsForm}>
    <form action="src/features/contacts/ui/components/ContactsForm/ContactsForm">
      <input type="text" name="name" placeholder="Name"/>
      <input type="text" name="email" placeholder="Email"/>
      <textarea name="message" placeholder="Message"></textarea>
      <Button type={"submit"} className={s.submitButton}>
        Send
      </Button>
    </form>
  </div>