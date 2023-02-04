import React from "react";
import cls from "./blogFive.module.scss";

const BlogFive = () => {
    return (
        <article className={cls.post}>
            <article className={cls.post}>
                <div className={cls.postDate}>
                    <span>26- Feb -2018</span>
                </div>

                <div className={cls.postBody}>
                    <h2 className={cls.postTitle}>
                        <a href="single.html">Post Format Standard</a>
                    </h2>
                    <div className={cls.postContent}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam non... </p>

                        <a href="single.html" className={cls.readMore}>read more <i className="fas fa-angle-right"></i></a>
                    </div>
                </div>
            </article>
        </article>
    )

}

export default BlogFive;