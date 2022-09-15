import React, {ReactNode} from "react";
import s from "./contactItem.module.scss"

export const ContactItem: React.FC<{
    title: string,
    children: ReactNode,
    icon: JSX.Element,
}> = ({title, children, icon}) =>
    <div className={s.contactItem}>
        <div className={s.icon}>{icon}</div>
        <div className={s.info}>
            <div className={s.title}>{title}</div>
            <div className={s.content}>{children}</div>
        </div>
    </div>