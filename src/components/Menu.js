import React from "react"
import {Link, NavLink} from "react-router-dom";

// localhost:3000/          -> Home
// localhost:3000/stuff     -> Stuff
// localhost:3000/contact   -> Contact

const Menu = () => {
    return (
        <ul className={"header"}>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/stuff">Stuff</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </ul>
    )
}

export default Menu;