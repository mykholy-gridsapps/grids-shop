import { Grid } from "@mui/material";
import React from "react";
import cls from "./blogSix.module.scss";

const BlogSix = () => {
    return (
        <>
            <div className={cls.sectionTitle}>
                <h2>RECENT ARTICLE</h2>
                <hr />
                <a href="#" className="with-icon mr-sm-auto ml-4 mr-4 ml-sm-0">VIEW BLOG<i className="fas fa-long-arrow-alt-right"></i></a>
            </div>
            <article className={cls.post}>
                <Grid container alignItems={'center'}>
                    <Grid item md={6}>
                        <div className={cls.postMedia}>
                            <a href="single.html">
                                <img src="./imgs/blog/post-5-1.jpg" alt="Post" width="396" height="297" />
                            </a>
                            <div className={cls.postDate}>
                                <span className={cls.day}>24</span>
                                <span className={cls.month}>JUL-19</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={6} className={cls.content} alignItems="center">

                        <div className={cls.postBody}>
                            <a href="#" className={cls.postCategory}>DESIGN TRENDS</a>
                            <h3 className={cls.postTitle}>Top quality flooring and parquets</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                                non placerat
                                mi. Etiam non tellus sem. Aenean pretium convallis lorem, sit amet
                                dapibus...</p>
                            <a href="single.html" className={cls.btn}>READ MORE</a>
                        </div>
                    </Grid>
                </Grid>
            </article>

        </>
    )

}

export default BlogSix;