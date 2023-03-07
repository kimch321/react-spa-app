import React from "react"
import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Stuff from "./pages/Stuff";
import Contact from "./pages/Contact";
import Menu from "./components/Menu";

// localhost:3000/          -> Home
// localhost:3000/stuff     -> Stuff
// localhost:3000/contact   -> Contact

function App() {
  return (
    <div>
      <h1>Simple SPA</h1>
      <ul className={"header"}>
        <nav>
          <li><a href="/">Home</a></li>
          <li><a href="/stuff">Stuff</a></li>
          <li><a href="/contact">Contact</a></li>
        </nav>
      </ul>
      <ul className={"content"}>
          <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/stuff' element={<Stuff />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
          </Routes>
      </ul>
    </div>
  );
}
export default App;

// <Route path='/*' element={<Whoops404 />} />는 제일 밑에 적는게 좋은데,
// 그 이유는 위에 놓으면 모든 요청을 404페이지가 다 처리할 수도 있기 때문이다.

// GPT
//리액트 애플리케이션에서 404 페이지를 제일 밑에 놓는 것은,
// 해당 URL 경로에 대한 라우트가 이전에 정의되지 않았을 때,
// 즉 모든 라우트와 일치하지 않는 URL 경로에 대해서만 404
// 보여주기 위해서입니다.

// 리액트 라우터에서 라우트는 위에서부터 순서대로 비교됩니다.
// 즉, 먼저 정의된 라우트가 먼저 일치하게 되므로,
// 404 페이지를 가장 마지막에 놓으면 이전에 정의된 모든 라우트와 일치하지 않는
// URL 경로에 대해서만 404 페이지가 보여지게 됩니다.

// 만약 404 페이지를 중간에 놓거나, 가장 상위에 놓게 된다면
// 이후에 정의되는 라우트에서도 404 페이지가 렌더링되어 버리는 문제가 발생할 수 있습니다.
// 따라서, 404 페이지는 라우트 정의의 가장 마지막에 위치시켜야 합니다.
// 이를 통해, 모든 라우트와 일치하지 않는 URL 경로에 대해서만
// 404 페이지가 렌더링되도록 보장할 수 있습니다.