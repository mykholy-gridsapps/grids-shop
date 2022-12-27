import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import cls from "./newsletterFour.module.scss";


const NewsletterFour = () => {
    return (
        <div className={cls.newsletterBanner}>
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
                            <input type="email" class="form-control mb-1" placeholder="Email address" required />
                            <button class="btn btn-primary">subscribe</button>
                        </form>
                    </Grid>
                </Grid >
            </Container>
        </div >
    )
}

export default NewsletterFour