import React from "react";
import cls from "./blogFour.module.scss";
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

const BlogFour = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <article className={cls.post}>
            <div className={cls.postMedia}>
                <a href="single.html">
                    <img src="./imgs/blog/post-4-1.jpg" />
                </a>
            </div>
            <div className={cls.postBody}>
                <h2>
                    <a href="single.html">Fashion News</a>
                </h2>
                <div className={cls.postDate}>
                    27-FEB-2018
                </div>

                <div className={cls.postContent}>
                    <p>Quisque elementum nibh at dolor pellentesque, a eleifend libero... </p>

                    <a href="single.html" className={cls.readMore}>read more <i class="fa-solid fa-arrow-right-long"></i></a>
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

export default BlogFour;