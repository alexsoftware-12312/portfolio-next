'use client';
import { DropDownSelection } from "./DropDownSelection"
import {AnimatePresence, motion} from "framer-motion"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import React, { useState } from "react";
import Link from "next/link";

export interface NavDropDownProps {
    items: NavListItem[],
    name: string
    width: number
}

export interface NavListItem {
    title: string,
    href: string,
    isNewWindow: boolean
}

export const NavDropDown: React.FC<NavDropDownProps> = ({navDropDownProps}) => {
    
    const [isAppListHidden, setAppListHidden] = useState(true);

    const onAppsListClick = () => {
        console.log('Mouse entered the element');
        setAppListHidden(!isAppListHidden)
    
    }
    
    const onAppsListOut = () => {
        console.log('Mouse left the element');
        setAppListHidden(true)
        
    }

    return (
        <div className="relative inline-block clickable">
                <div onMouseDown={onAppsListClick}>{navDropDownProps.name} {isAppListHidden ? <FontAwesomeIcon icon={faChevronDown} size={"1x"}/>: <FontAwesomeIcon icon={faChevronUp} size={"1x"}/>}</div>
                
             <AnimatePresence initial={false}>{!isAppListHidden ? <motion.div initial={{opacity: 0}}
             exit={{ opacity: 0 }}
          animate={{
            opacity: 1,
                transition:{duration:0.5}
                }} className={"absolute left-0 mt-2" + (" w-" + navDropDownProps.width)} onMouseLeave={onAppsListOut}>
                    
        <ul className="dropdown-menu absolute z-50 rounded-md">
            {navDropDownProps.items.map((l:NavListItem, i: number) => {
                
                return (
                <li key={i} className={"navButton item-center p-3"  + (" w-" + navDropDownProps.width)}  >
                    <div className={"items-center "  + (i < navDropDownProps.items.length - 1 ? " seperated": "" )}><a className="p-2 items-center" href={l.href} target={l.isNewWindow? "_blank" : "_self"}>{l.title} </a></div> 
                </li>
                           
                )
            })}
        </ul>
                </motion.div> : null}</AnimatePresence>
        
        {!isAppListHidden ? (<div className='absolute overlay' onClick={() => setAppListHidden(true)} />) : null}
        </div>

    )
}