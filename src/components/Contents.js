import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Stuff from "../pages/Stuff";
import Contact from "../pages/Contact";
import NoPath from "../pages/NoPath";
import BookDetail from "../pages/BookDetail";

// localhost:3000/          -> Home
// localhost:3000/stuff     -> Stuff
// localhost:3000/contact   -> Contact

const Contents = () => {
    return(
        <ul className={"content"}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/stuff' element={<Stuff />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/books/:id' element={<BookDetail />} />
                <Route path='*' element={<NoPath />} />
            </Routes>
        </ul>
    )
}

export default Contents;


