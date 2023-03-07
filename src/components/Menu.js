import React from "react"
import {Link} from "react-router-dom";

// localhost:3000/          -> Home
// localhost:3000/stuff     -> Stuff
// localhost:3000/contact   -> Contact

const Menu = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/stuff">Stuff</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default Menu;