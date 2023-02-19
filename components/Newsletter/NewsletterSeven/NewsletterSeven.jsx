import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { i18n } from "next-i18next";
import React from "react";
import cls from "./newsletterSeven.module.scss";


const NewsletterSeven = () => {
    return (
        <div className={`${cls.newsletterBanner} ${cls[i18n.language]}`}>
            <Container maxWidth='xxl'>
                <Grid container justifyContent={{lg: "flex-start", md: "center"}} alignItems="center">
                    <Grid item lg={3} md={5} xs={12}>
                        <h4 className={cls.newsletterTitle}>Sign Up to Newsletter</h4>
                    </Grid>
                    <Grid item md={5} lg={4} xs={12}>
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