import React from 'react';
import {useLocation} from "react-router-dom";

// export는 화살표 함수 지원 x
// Link로 연결하니 화면의 깜박임이 없어졌다. 즉, 새로 페이지를 다운받지 않게 되었다.
// 클라이언트 사이드 렌더링
export function Home() {
    return (
        <div>
            <h1>[Company Website]</h1>
        </div>
    )
}
export function About() {
    return (
        <div>
            <h1>[About]</h1>
        </div>
    )
}
export function Events() {
    return (
        <div>
            <h1>[Events]</h1>
        </div>
    )
}
export function Products() {
    return (
        <div>
            <h1>[Products]</h1>
        </div>
    )
}
export function Contact() {
    return (
        <div>
            <h1>[Contact]</h1>
        </div>
    )
}
export function Whoops404() {
    let loc =useLocation(); // 요청 경로 알아냄
    return (
        <div>
            <h1>Resource {loc.pathname} not found!!</h1>
        </div>
    )
}