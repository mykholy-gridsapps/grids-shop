import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

import cls from "./newsletterFour.module.scss";
import { i18n } from "next-i18next";


const NewsletterFour = () => {
    return (
        <div className={`${cls.newsletterBanner} ${cls[i18n.language]}`}>
            <Container>
                <Grid container justifyContent='center' alignItems="center">
                    <Grid  item md={10} xl={7} lg={8}>
                        <div className={cls.text}>
                            <div>
                                <h2>subscribe to our newsletter</h2>
                                <p>
                                    Get all the latest information on events, sales and
                                    offers. Sign up for newsletter:
                                </p>
                            </div>
                        </div>
                        <form>
                            <input type="email" className="form-control mb-1" placeholder="Email address" required />
                            <button className="btn btn-primary">subscribe</button>
                        </form>
                    </Grid>
                </Grid >
            </Container>
        </div >
    )
}

export default NewsletterFour