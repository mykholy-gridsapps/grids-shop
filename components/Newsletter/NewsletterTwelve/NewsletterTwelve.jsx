import { i18n, useTranslation } from "next-i18next";
import React from "react";

import { Grid } from "@mui/material";
import { Container } from "@mui/system";

import cls from "./newsletterTwelve.module.scss";


const NewsletterTwelve = () => {
    const { t, i18n } = useTranslation('common');
    return (
        <div className={`${cls.newsletterBanner} ${cls[i18n.language]}`}>
            <Container maxWidth='xl' >
                <Grid container justifyContent='start' alignItems="center">
                    <Grid className={cls.text} item lg={6} xs={12}>
                        <div className={cls.newsletterContent}>
                            <h3>Get Special Offers and Savings</h3>
                            <p >Get all the latest information on Events, Sales and
                                Offers.
                            </p>
                        </div>
                    </Grid>
                    <Grid item lg={6} xs={12}>
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

export default NewsletterTwelve