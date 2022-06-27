import React from "react";
import s from './contacts.module.css'
import sContainer from '../common/styles/container.module.css'

export const Contacts = () => (
    <div id="contacts" className={s.contactsBlock}>
        <div className={`${sContainer.container} ${s.contactsContainer}`}>
            <h2>Contacts</h2>
            <form action="">
                <input type="text"/>
                <input type="text"/>
                <textarea name="" id=""></textarea>
            
            </form>
            <button type={"submit"}>Send</button>
        </div>
    </div>
)