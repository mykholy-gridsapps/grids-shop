import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import cls from "./newsletterTen.module.scss";


const NewsletterTen = () => {
    return (
        <div className={cls.newsletterBanner}>
            <Container maxWidth='xl' >
                <Grid container className={cls.container} justifyContent='center' alignItems="center">
                    <Grid item className={cls.leftSec}>
                        <div className={cls.text} >
                            <i className="fa-regular fa-envelope"></i>

                            <div className={cls.newsletterContent}>
                                <h3>Get Special Offers and Savings</h3>
                                <p >Get all the latest information on Events, Sales and
                                    Offers.
                                </p>
                            </div>
                        </div>
                        <form action="#">
                            <input type="email" placeholder="Email Your E-mail Address..." required />
                            <button>SIGN UP</button>
                        </form>
                    </Grid>
                    <Grid item>
                        <div className="social-icons my-3">
                            <a href="#" className={[cls.socialIcon, cls.socialFacebook, 'fab fa-facebook-f'].join(' ')} target="_blank"></a>
                            <a href="#" className={[cls.socialIcon, cls.socialTwitter, 'fab fa-twitter'].join(' ')} target="_blank"></a>
                            <a href="#" className={[cls.socialIcon, cls.socialLinked, 'fab fa-linkedin-in'].join(' ')} target="_blank"></a>
                        </div>
                    </Grid>
                </Grid >
            </Container>
        </div >
    )
}

export default NewsletterTen