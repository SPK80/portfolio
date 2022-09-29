import React from "react";
import s from "./contactsInfo.module.scss";
import {ContactItem} from "../ContactItem/ContactItem";
import {MdLocationOn, MdMail, MdPhone} from "react-icons/md";
import {RiLinkedinBoxLine} from "react-icons/ri";

export const ContactsInfo: React.FC = () =>
  <div className={s.contactsInfo}>
    <ContactItem title="Email" icon={<MdMail/>}>
      <a href="mailto:psukonkin@gmail.com">psukonkin@gmail.com</a>
    </ContactItem>
    <ContactItem title="Phone" icon={<MdPhone/>}>
      <a href="tel:+1234567890">+123 4567890</a>
    </ContactItem>
    <ContactItem title="Linkedin" icon={<RiLinkedinBoxLine/>}>
      <a href="features/contacts/ui/components/ContactsInfo/ContactsInfo">sukonkin</a>
    </ContactItem>
    <ContactItem title="Location" icon={<MdLocationOn/>}>
      Earth </ContactItem>
  </div>