import { Grid } from "@mui/material";
import React from "react";
import cls from "./newsletterThree.module.scss";


const NewsletterThree = () => {
    return (
        <div className={cls.newsletterBanner}>
            <Grid container  justifyContent='center' alignItems="center">
                <Grid className={cls.text} item lg={6} xs={12}>
                    <h2>subscribe to our newsletter</h2>
                    <h5>Get all the latest information on events, sales and
                        offers.</h5>
                </Grid>
                <Grid item lg={5} xs={12}>

                    <form>
                        <input type="email" className="form-control mb-1" placeholder="Email address" required />
                        <button className="btn btn-primary">subscribe</button>
                    </form>
                </Grid>
            </Grid >
        </div >
    )
}

export default NewsletterThree