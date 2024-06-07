import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import styles from "../../css/article/ArticleList.module.css";


function Pagenation({ handleOnClick, currentPage, totalPage }) {

    const [page, setPage] = useState(currentPage)

    const iconClick = number => {
        if (number > 0 && number <= totalPage) {
            handleOnClick(number)
            setPage(number)
        }
    }
    return (
        <div className={styles['pagination-container']}>
            <div className={styles['icons']}>
                <Icon icon="iconamoon:arrow-left-2-light" className={styles['pagination-icon']} onClick={() => iconClick(page - 1)} />
            </div>
            <div
                className={styles['page-count']}>
                {currentPage} / {totalPage}
            </div>

            <div className={styles['icons']}>
                <Icon icon="iconamoon:arrow-right-2-light" className={styles['pagination-icon']} onClick={() => iconClick(page + 1)} />
            </div>
        </div>
    )
}

export default Pagenation