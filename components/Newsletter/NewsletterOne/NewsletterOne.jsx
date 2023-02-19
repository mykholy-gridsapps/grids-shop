import { Grid } from "@mui/material";
import { i18n } from "next-i18next";
import React from "react";
import cls from "./newsletterOne.module.scss";


const NewsletterOne = () => {
    return (
        <div className={`${cls.newsletterBanner} ${cls[i18n.language]}`}>
            <Grid container >
                <Grid item xl={6} lg={8} md={9} xs={12} >
                    <div className={cls.bannerContent}>
                        <h2>subscribe to our newsletter</h2>
                        <h5>Get all the latest information on events,
                            sales and offers. Sign up for newsletter:</h5>
                        <div>
                            <form>
                                <input type="email" className="form-control mb-1" placeholder="Email address" required />
                                <button className="btn btn-primary">subscribe</button>
                            </form>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default NewsletterOne