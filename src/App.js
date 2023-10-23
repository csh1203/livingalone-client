import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from 'react-router-dom';

import Main from "./components/Main";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/login"} element={<LoginPage />} />
    </Routes>
  </Router>
  );
}

export default App;
