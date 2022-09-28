import React, {useEffect, useState} from 'react';
import s from "./topMenu.module.scss"
import {Logo} from "../logo/Logo";
import {BoundingContainer} from "../../../../common/components/boundingContainer/BoundingContainer";
import {NavLinks} from "../navLinks/NavLinks";

export const TopMenu: React.FC<{ onClickLink?: (href: string) => void }> = ({onClickLink}) => {
  const [isOnTop, setIsOnTop] = useState(true)
  
  useEffect(() => {
    const scrollHandler = () => {
      const y = window.scrollY;
      if (y > 100) setIsOnTop(false)
      else setIsOnTop(true)
    }
    
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [])
  
  let topMenuClass = s.topMenu
  !isOnTop && (topMenuClass = topMenuClass + ' ' + s.notTransparent)
  
  return (
    <div className={topMenuClass}>
      <BoundingContainer>
        <div className={s.contentWrap}>
          <Logo/>
          <NavLinks onClick={onClickLink}/>
        </div>
      </BoundingContainer>
    </div>
  )
}

