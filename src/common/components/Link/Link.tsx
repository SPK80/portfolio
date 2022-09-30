import React, {ReactNode} from "react";

export const Link: React.FC<{ href: string, onClick?: (href: string) => void, children: ReactNode }> =
  ({href, onClick, children}) => {
    const onClickHandler = () => onClick && onClick(href)
    return <a href={href} onClick={onClickHandler}>{children}</a>
  }