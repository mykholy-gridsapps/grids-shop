import { Grid } from "@mui/material";
import { i18n } from "next-i18next";
import React from "react";
import cls from "./newsletterEight.module.scss";


const NewsletterEight = () => {
    return (
        <div className={`${cls.newsletterBanner} ${cls[i18n.language]}`}>
            <div className={cls.bannerContent}>
                <p>
                    <i className="fa-regular fa-envelope"></i>
                </p>
                <h2>subscribe to our newsletter</h2>
                <h5>Get all the latest information on Events, Sales and Offers.</h5>
                <div>
                    <form>
                        <input type="email" className="form-control mb-1" placeholder="Email address" required />
                        <button className="btn btn-primary">subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewsletterEight