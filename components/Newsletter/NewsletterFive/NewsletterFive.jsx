import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { i18n } from "next-i18next";

import cls from "./newsletterFive.module.scss";


const NewsletterFive = () => {
    return (
        <div className={`${cls.newsletterBanner} ${cls[i18n.language]}`}>
            <Container maxWidth="xl">
                <Grid container justifyContent='center' alignItems="center">
                    <Grid className={cls.text} item md={6} xs={12}>
                        <i className="fa-regular fa-envelope"></i>

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

export default NewsletterFive