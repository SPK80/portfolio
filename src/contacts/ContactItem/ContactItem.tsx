import React, {ReactNode} from "react";
import s from "./contactItem.module.scss"

export const ContactItem: React.FC<{
    title: string,
    children: ReactNode
}> = ({title, children}) =>
    <div className={s.contactItem}>
        <div className={s.title}>{title}</div>
        <div className={s.content}>{children}</div>
    </div>