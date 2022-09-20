import React, {useEffect, useState} from 'react';
import s from "./topMenu.module.scss"
import {NavLinks} from "../navLinks/NavLinks";
import {Logo} from "../logo/Logo";
import {BoundingContainer} from "./boundingContainer/BoundingContainer";

export const TopMenu: React.FC = () => {
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
                <Logo/>
                <NavLinks/>
            </BoundingContainer>
        </div>
    )
}

