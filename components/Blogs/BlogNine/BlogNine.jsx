import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";


import cls from "./blogNine.module.scss";

const BlogNine = () => {
    const { t, i18n } = useTranslation('common');
    return (
        <article className={`${cls.post} ${cls[i18n.language]}`}>
            <div className={cls.postMedia}>
                <Link href="single.html">
                    <img src="./imgs/blog/post-7-1.jpg" />
                </Link>
            </div>
            <div className={cls.postBody}>
                <h2>
                    <Link href="single.html">Fashion News</Link>
                </h2>
                <div className={cls.postMeta}>
                    <span className={cls.metaDate}><i className="far fa-calendar-alt"></i>December 1,
                        2020</span>
                    <span><i className="far fa-comments"></i><a href="#" title="Comment on Lorem ipsum dolor sit amet">0 Comments</a></span>
                </div>
                <Link href="single.html" className={`${cls.readMore} ${cls[i18n.language]}`}>read more...</Link>

            </div>
        </article>
    )

}

export default BlogNine;