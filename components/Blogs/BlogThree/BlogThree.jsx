import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import cls from "./blogThree.module.scss";

const BlogThree = () => {
    const { t, i18n } = useTranslation('common');
    return (
        <article className={cls.post}>
            <div className={`${cls.postMedia} ${cls[i18n.language]}`}>
                <Link href="single.html">
                    <img src="./imgs/blog/post-1-1.jpg" data-zoom-image="assets/images/blog/home/post-1.jpg" alt="Post" width="280" height="209" />
                </Link>
                <div className={`${cls.postDate} ${cls[i18n.language]}`}>
                    <span className={cls.day}>29</span>
                    <span className={cls.month}>Jun</span>
                </div>
            </div>
            <div className={cls.postBody}>
                <h2>
                    <Link href="single.html">Post Format Standard</Link>
                </h2>

                <div className={cls.postContent}>
                    <p>Leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with... </p>
                    <div className={cls.postMeta}>
                        <i className="fa-regular fa-comments"></i>
                        <Link href="/">0 COMMENTS</Link>
                    </div>
                </div>
            </div>
        </article>
    )

}

export default BlogThree;