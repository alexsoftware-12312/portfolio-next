'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import "@fortawesome/fontawesome-svg-core/styles.css";  
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {NavDropDown} from "./NavDropDown"

const onAppsListHover = () => {
    console.log('Mouse entered the element');
}

export const TopNav = () => {



    return (
    <div id="topNav" className="flex h-20 items-center justify-between px-8">
        <div className="flex items-center gap-4">Logo to the left.</div>
        <div className="flex items-center gap-10">
            <div><Link href={"/aboutme"}>About Me</Link></div>
            <div onMouseOver={onAppsListHover}>Apps <FontAwesomeIcon icon={faChevronDown} size={"1x"}/></div>
            <NavDropDown/>
            <div>Blogs maybe</div>
            <div>Links</div>
        </div>
</div>)
}