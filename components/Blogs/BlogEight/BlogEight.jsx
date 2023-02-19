import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import cls from "./blogEight.module.scss";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const BlogEight = () => {
    const [open, setOpen] = React.useState(false);
    const { t, i18n } = useTranslation('common');
    return (
        <article className={cls.post}>
            <div className={cls.postMedia}>
                <Link href="single.html">
                    <img src="./imgs/blog/post-7-1.jpg" />
                </Link>
                <span className={`${cls.prodFullScreen} ${cls[i18n.language]}`}>
                    <i className="fas fa-search" onClick={() => setOpen(true)}></i>
                </span>
            </div>
            <div className={cls.postBody}>
                <div className={cls.postMeta}>
                    <span className={cls.metaDate}><i className="far fa-calendar-alt"></i>December 1,
                        2020</span>
                    <span><i className="far fa-user"></i>By <a href="#" title="Posts by John Doe" rel="author">John Doe</a></span>
                    <span><i className="far fa-comments"></i><a href="#" title="Comment on Lorem ipsum dolor sit amet">0 Comments</a></span>
                </div>
                <h2>
                    <Link href="single.html">Fashion News</Link>
                </h2>
                <div className={cls.postContent}>
                    <p>Quisque elementum nibh at dolor pellentesque, a eleifend libero... </p>

                    <Link href="single.html" className={`${cls.readMore} ${cls[i18n.language]}`}>read more...</Link>
                </div>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: "./imgs/blog/post-7-1.jpg" }
                ]}
                plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
            />
        </article>
    )

}

export default BlogEight;