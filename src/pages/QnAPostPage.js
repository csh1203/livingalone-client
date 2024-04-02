import Footer from "../components/common/Footer";
import Nav from "../components/common/Nav";
import AnswerList from "../components/qna/AnswerList";
import QnAPost from "../components/qna/QnAPost";

function QnAPostPage(props) {
    return (
        <>
            <Nav />
            <QnAPost />
            <AnswerList />
            <Footer />
        </>
    )
}

export default QnAPostPage;