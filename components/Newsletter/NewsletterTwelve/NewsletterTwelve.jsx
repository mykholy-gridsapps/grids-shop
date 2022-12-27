import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import cls from "./newsletterTwelve.module.scss";


const NewsletterTwelve = () => {
    return (
        <div className={cls.newsletterBanner}>
            <Container maxWidth='xl' >
                <Grid container justifyContent='start' alignItems="center">
                    <Grid className={cls.text} item>
                        <div className={cls.newsletterContent}>
                            <h3>Get Special Offers and Savings</h3>
                            <p >Get all the latest information on Events, Sales and
                                Offers.
                            </p>
                        </div>
                    </Grid>
                    <Grid item md={6} xs={12}>
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