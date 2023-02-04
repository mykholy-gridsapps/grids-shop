import React from "react";
import cls from "./blogSeven.module.scss";
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

const BlogSeven = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <article className={cls.post}>
            <div className={cls.postMedia}>
                <a href="single.html">
                    <img src="./imgs/blog/post-6-1.png" alt="Post" width="280" height="209" />
                </a>
                <span className={cls.prodFullScreen}>
                    <i className="fas fa-search" onClick={() => setOpen(true)}></i>
                </span>
            </div>
            <div className={cls.postBody}>
                <div className={cls.categoryList}>Fresh Vegetables</div>
                <h2>
                    <a href="single.html">Pasta With Pesto</a>
                </h2>

                <div className={cls.postContent}>
                    <p>A tasty way to incorporate more veggies into your diet!</p>
                </div>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: "./imgs/blog/post-6-1.png" },
                    { src: "./imgs/blog/post-6-1.png" },
                    { src: "./imgs/blog/post-6-1.png" },
                ]}
                plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
            />
        </article>
    )

}

export default BlogSeven;