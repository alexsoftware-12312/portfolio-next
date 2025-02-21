
import "@fortawesome/fontawesome-svg-core/styles.css";  
import Link from "next/link";
import {NavDropDown, NavDropDownProps} from "./NavDropDown"


export const TopNav = () => {
    const appList:NavDropDownProps = 
    {
        width: 200,
        name: "Apps",
        items : [
            {title: "ThreeJS Sandbox", href:"/threejssandbox", isNewWindow: false},
            {title: "RecipeLLM", href:"/recipellm", isNewWindow: false},
            {title: "Golf Is Hard", href:"/golfishard", isNewWindow: false}
        ]
    } 

    const linksList = {
        width: 26,
        name:"Links",
        items: [
            {title: "Github", href:"https://github.com/", isNewWindow: true},
            {title: "LinkedIn", href:"https://www.linkedin.com/", isNewWindow: true}]
    } as NavDropDownProps

    return (
    <div id="topNav" className="flex h-20 items-center justify-between px-8">
        <div className="flex items-center gap-4">Logo to the left.</div>
        <div className="flex items-center gap-10">
            <div><Link href={"/aboutme"}>About Me</Link></div>
            <NavDropDown navDropDownProps={appList} />
            <div>Blogs maybe</div>
            <NavDropDown navDropDownProps={linksList} />
        </div>
</div>)
}