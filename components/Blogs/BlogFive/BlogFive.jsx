import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import cls from "./blogFive.module.scss";

const BlogFive = () => {
    const { t, i18n } = useTranslation('common')
    return (
        <article className={cls.post}>
            <article className={cls.post}>
                <div className={cls.postDate}>
                    <span>26- Feb -2018</span>
                </div>

                <div className={cls.postBody}>
                    <h2 className={cls.postTitle}>
                        <Link href="single.html">Post Format Standard</Link>
                    </h2>
                    <div className={cls.postContent}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam non... </p>

                        <Link href="single.html" className={`${cls.readMore} ${cls[i18n.language]}`}>read more <i className="fas fa-angle-right"></i></Link>
                    </div>
                </div>
            </article>
        </article>
    )

}

export default BlogFive;