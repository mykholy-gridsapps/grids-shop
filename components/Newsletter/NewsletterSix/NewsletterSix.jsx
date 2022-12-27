import { Grid } from "@mui/material";
import React from "react";
import cls from "./newsletterSix.module.scss";


const NewsletterSix = () => {
    return (
        <div className={cls.newsletterBanner}>
            <figure>
                <img src="./imgs/banners/newsletter-six-banner.png" alt="banner" width="1180"
                    height="300" />
            </figure>

            <div className={cls.bannerLayer}>
                <h4 class="mt-0 m-b-1">Subscribe To Our Newsletter</h4>
                <p class="font2 text-body m-b-4">Get all the latest information on events, sales
                    and offers.</p>

                <form action="#" class="d-flex mb-0 mx-auto">
                    <input type="email" class="form-control mb-0" placeholder="Email address" required />

                    <button>Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default NewsletterSix