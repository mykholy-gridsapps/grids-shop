import { Grid } from "@mui/material";
import React from "react";
import cls from "./newsletterOne.module.scss";


const NewsletterOne = () => {
    return (
        <div className={cls.newsletterBanner}>
            <Grid container >
                <Grid item xl={6} lg={8} md={9} xs={11} >
                    <div className={cls.bannerContent}>
                        <h2>subscribe to our newsletter</h2>
                        <h5>Get all the latest information on events,
                            sales and offers. Sign up for newsletter:</h5>
                        <div>
                            <form>
                                <input type="email" class="form-control mb-1" placeholder="Email address" required />
                                <button class="btn btn-primary">subscribe</button>
                            </form>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default NewsletterOne