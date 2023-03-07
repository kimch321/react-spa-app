import React from 'react';
import ReactDOM from 'react-dom';
// as 별칭.
import { BrowserRouter as Router } from "react-router-dom";
import "../src/index.css";

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// GPT
// <Router> 컴포넌트는 리액트 라우터에서 사용하는 라우팅 컴포넌트입니다.
// <Router> 컴포넌트는 브라우저의 URL 경로에 따라 적절한 컴포넌트를 렌더링하기 위해
// 사용됩니다.
// <Router> 컴포넌트는 리액트 라우터의 기능을 활용하기 위해 감싸는 컴포넌트입니다.

// 리액트 애플리케이션에서 <Router> 컴포넌트를 사용하기 위해서는
// 먼저, react-router-dom 라이브러리에서 해당 컴포넌트를 import해야 합니다.
// 그 다음에, <Router> 컴포넌트를 사용해서, 브라우저의 URL 경로에 따라
// 적절한 컴포넌트를 렌더링할 수 있습니다.

// <Router> 컴포넌트는 일반적으로 애플리케이션의 최상위 레벨에서 사용됩니다.
// 이유는, 브라우저의 URL 경로에 따라 렌더링되는 모든 컴포넌트가
// <Router> 컴포넌트의 하위에 위치하기 때문입니다.
// 따라서, <Router> 컴포넌트는 애플리케이션의 모든 라우트를 담당하며,
// 각 라우트에 해당하는 컴포넌트를 렌더링하기 위한 라우팅 기능을 제공합니다.

// 따라서, <Router> 컴포넌트는 리액트 라우터에서 가장 중요한 컴포넌트 중 하나입니다. 모든 라우트와 라우팅 기능을 활용하기 위해서는 <Router> 컴포넌트를 사용해야 하며, 일반적으로 최상위 레벨에서 감싸는 것이 일반적입니다.