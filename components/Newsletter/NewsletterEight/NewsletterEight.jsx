import { Grid } from "@mui/material";
import React from "react";
import cls from "./newsletterEight.module.scss";


const NewsletterEight = () => {
    return (
        <div className={cls.newsletterBanner}>
            <div className={cls.bannerContent}>
                <p>
                    <i class="fa-regular fa-envelope"></i>
                </p>
                <h2>subscribe to our newsletter</h2>
                <h5>Get all the latest information on Events, Sales and Offers.</h5>
                <div>
                    <form>
                        <input type="email" class="form-control mb-1" placeholder="Email address" required />
                        <button class="btn btn-primary">subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewsletterEight