import { useParams } from "react-router-dom";
import Footer from "../components/common/Footer";
import Nav from "../components/common/Nav";
import styles from '../css/article/ArticleDetail.module.css';
import articleList from "../data/article";

function ArticleDetailPage() {
    const { id } = useParams()
    const article = articleList.filter(article => article.id == id)[0]
    // HTML 태그를 적용할 내용
    const contentWithHTML = { __html: article.content }
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <h1 className={styles.title}>{article.title}</h1>
                <div className={styles.date}>{article.date}</div>
                <hr className={styles.hr} />
                <div dangerouslySetInnerHTML={contentWithHTML} className={styles.content}></div>
            </div>
            <Footer />
        </>
    )
}

export default ArticleDetailPage;