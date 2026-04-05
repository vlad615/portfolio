import { Link } from "react-router-dom"
import { Icon } from "../icons/Icon"


export const Logo = () =>{
    return(
        <Link to="/">
            <Icon iconId="logo" width="67" height="39" viewbox="20,-10,77,69"/>
        </Link>
    )
}