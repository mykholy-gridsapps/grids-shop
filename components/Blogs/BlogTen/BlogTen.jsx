import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";


import cls from "./blogTen.module.scss";

const BlogTen = () => {
    const { t, i18n } = useTranslation('common');
    return (
        <article className={`${cls.post} ${cls[i18n.language]}`}>
            <div className={cls.entryThumbnail}>
                <Link className={cls.postThumbnail}
                    href="#">
                    <img src="./imgs/blog/post-10-1.png" />
                </Link>
                <div className={cls.hoverOverlay}>
                    <div className={cls.hoverOverlayBtn}>
                        <Link href="#" className={cls.zoomGallery}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </Link>
                        <Link href="#" className={cls.portfolioDetail}>
                            <i className="fa-regular fa-link"></i>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={cls.blogEntryContent}>
                <div className={cls.entryDate}>
                    <span className={cls.entryDay}>20</span>
                    <span className={cls.entryMonth}>Sep</span>
                </div>
                <header className={cls.entryHeader}>
                    <h4 className={cls.entryTitle}>
                        <Link href="#">Duis autem vel eum iriure dolor</Link>
                    </h4>
                </header>
                <div className={cls.entryContent}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                        … 
                        <Link href="#" className={cls.moreLink}>Read more</Link>
                    </p>

                </div>
            </div>
        </article>
    )

}

export default BlogTen;