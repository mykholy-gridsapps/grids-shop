import { Grid } from "@mui/material";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

import cls from "./blogSix.module.scss";

const BlogSix = () => {
    const { t, i18n } = useTranslation('common');
    return (
        <>
            <div className={`${cls.sectionTitle} ${cls[i18n.language]}`}>
                <h2>RECENT ARTICLE</h2>
                <hr />
                <Link className={cls[i18n.language]} href="#">VIEW BLOG<i className="fas fa-long-arrow-alt-right"></i></Link>
            </div>
            <article className={cls.post}>
                <Grid container alignItems={'center'}>
                    <Grid item md={6}>
                        <div className={cls.postMedia}>
                            <Link href="single.html">
                                <img src="./imgs/blog/post-5-1.jpg" alt="Post" width="396" height="297" />
                            </Link>
                            <div className={`${cls.postDate} ${cls[i18n.language]}`}>
                                <span className={cls.day}>24</span>
                                <span className={cls.month}>JUL-19</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={6} className={cls.content} alignItems="center">

                        <div className={cls.postBody}>
                            <Link href="#" className={cls.postCategory}>DESIGN TRENDS</Link>
                            <h3 className={cls.postTitle}>Top quality flooring and parquets</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                                non placerat
                                mi. Etiam non tellus sem. Aenean pretium convallis lorem, sit amet
                                dapibus...</p>
                            <Link href="single.html" className={cls.btn}>READ MORE</Link>
                        </div>
                    </Grid>
                </Grid>
            </article>

        </>
    )

}

export default BlogSix;