import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import cls from "./newsletterSeven.module.scss";


const NewsletterSeven = () => {
    return (
        <div className={cls.newsletterBanner}>
            <Container maxWidth='xxl'>
                <Grid container justifyContent='start' alignItems="center">
                    <Grid item lg={3} md={6} xs={12}>
                        <h4 className={cls.newsletterTitle}>Sign Up to Newsletter</h4>
                    </Grid>
                    <Grid item md={6} lg={4} xs={12}>
                        <p>
                            Get all the latest information on Events, Sales and Offers.
                        </p>
                        <span className="widget-newsletter-content d-block font-weight-bold ls-n-10 text-white">Receive $10 coupon for first shopping.</span>
                    </Grid>
                    <Grid item md={10} lg={5} xs={12}>
                        <form action="#">
                            <input type="email" placeholder="Email Your E-mail Address..." required />
                            <button>SIGN UP</button>
                        </form>
                    </Grid>
                </Grid >
            </Container>
        </div >
    )
}

export default NewsletterSeven