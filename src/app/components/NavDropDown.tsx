import { DropDownSelection } from "./DropDownSelection"

export const NavDropDown = () => {

    return (<div>
        <ul>
            <DropDownSelection title={"Three JS Sandbox"} href={"/threejssandbox"} />
            <DropDownSelection title={"Recipe LLM"} href={"/recipellm"} />
            <DropDownSelection title={"Golf Is Hard"} href={"/golfishard"} />
        </ul>
    </div>
    )
}