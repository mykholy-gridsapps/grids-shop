import React from "react";
import cls from "./blogEight.module.scss";
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

const BlogEight = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <article className={cls.post}>
            <div className={cls.postMedia}>
                <a href="single.html">
                    <img src="./imgs/blog/post-7-1.jpg" />
                </a>
                <span className={cls.prodFullScreen}>
                    <i className="fas fa-search" onClick={() => setOpen(true)}></i>
                </span>
            </div>
            <div className={cls.postBody}>
                <div className={cls.postMeta}>
                    <span className={cls.metaDate}><i className="far fa-calendar-alt"></i>December 1,
                        2020</span>
                    <span className="meta-author"><i className="far fa-user"></i>By <a href="#" title="Posts by John Doe" rel="author">John Doe</a></span>
                    <span className="meta-comments"><i className="far fa-comments"></i><a href="#" title="Comment on Lorem ipsum dolor sit amet">0 Comments</a></span>
                </div>
                <h2>
                    <a href="single.html">Fashion News</a>
                </h2>
                <div className={cls.postContent}>
                    <p>Quisque elementum nibh at dolor pellentesque, a eleifend libero... </p>

                    <a href="single.html" className={cls.readMore}>read more...</a>
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