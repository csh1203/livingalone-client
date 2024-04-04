import React from "react";
import { Provider } from 'react-redux'; // 추가
import {
    Route,
    BrowserRouter as Router,
    Routes
} from 'react-router-dom';
import store from './store'; // 추가

import AllQnABoardPage from "./pages/AllQnABoardPage";
import ArticlePage from "./pages/ArticlePage";
import CostCalculatorPage from "./pages/CostCalculatorPage";
import CreateQnAPage from "./pages/CreateQnAPage";
import EditInfoPage from "./pages/EditInfoPage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import Main from "./pages/Main";
import ProfilePage from "./pages/ProfilePage";
import QnAPage from "./pages/QnAPage";
import QnAPostPage from "./pages/QnAPostPage";
import FindAccountPage from "./pages/FindAccountPage";

function App() {
    return (
        <Provider store={store}> {/* Provider 추가 */}
            <Router>
                <Routes>
                    <Route path={"/"} element={<Main />} />
                    <Route path={"/login"} element={<LoginPage />} />
                    <Route path={"/join"} element={<JoinPage />} />
                    <Route path={"/costCalculator"} element={<CostCalculatorPage />} />
                    <Route path={"/articles"} element={<ArticlePage />} />
                    <Route path={"/qna"} element={<QnAPage />} />
                    <Route path={"/qna/all"} element={<AllQnABoardPage />} />
                    <Route path={"/qna/write"} element={<CreateQnAPage />} />
                    <Route path={"/mypage"} element={<ProfilePage />} />
                    <Route path={"/mypage/editInfo"} element={<EditInfoPage />} />
                    <Route path={"/qna/post/:id"} element={<QnAPostPage />} />
                    <Route path={"/findAccount"} element={<FindAccountPage/>} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
