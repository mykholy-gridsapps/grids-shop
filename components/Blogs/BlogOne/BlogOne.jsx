import React from "react";
import cls from "./blogOne.module.scss";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const BlogOne = () => {
    const [open, setOpen] = React.useState(false);
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
                <span className={cls.prodFullScreen}>
                    <i class="fas fa-search" onClick={() => setOpen(true)}></i>
                </span>
            </div>
            <div className={cls.postBody}>
                <h2>
                    <a href="single.html">Post Format Standard</a>
                </h2>

                <div className={cls.postContent}>
                    <p>Leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with... </p>

                    <a href="single.html" class="read-more">read more <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: "./imgs/blog/post-1-1.jpg" },
                    { src: "./imgs/blog/post-1-2.jpg" },
                    { src: "./imgs/blog/post-1-3.jpg" },
                ]}
                plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
            />
        </article>
    )

}

export default BlogOne;