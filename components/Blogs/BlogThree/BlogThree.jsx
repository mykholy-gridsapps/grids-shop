import React from "react";
import cls from "./blogThree.module.scss";

const BlogThree = () => {
    return (
        <article className={cls.post}>
            <div className={cls.postMedia}>
                <a href="single.html">
                    <img src="./imgs/blog/post-1-1.jpg" data-zoom-image="assets/images/blog/home/post-1.jpg" alt="Post" width="280" height="209" />
                </a>
                <div className={cls.postDate}>
                    <span className={cls.day}>29</span>
                    <span className={cls.month}>Jun</span>
                </div>
            </div>
            <div className={cls.postBody}>
                <h2>
                    <a href="single.html">Post Format Standard</a>
                </h2>

                <div className={cls.postContent}>
                    <p>Leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with... </p>
                    <div className={cls.postMeta}>
                        <i className="fa-regular fa-comments"></i>
                        <a href="#" title="Comment on Top Jeans Collection">0 COMMENTS</a>
                    </div>
                </div>
            </div>
        </article>
    )

}

export default BlogThree;