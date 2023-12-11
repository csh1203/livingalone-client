import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from 'react-router-dom';

import Main from "./pages/Main";
import LoginPage from "./pages/LoginPage";
import CostCalculatorPage from "./pages/CostCalculatorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/costCalculator"} element={<CostCalculatorPage />} />
    </Routes>
  </Router>
  );
}

export default App;
