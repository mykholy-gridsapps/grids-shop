import { Grid } from "@mui/material";
import { i18n, useTranslation } from "next-i18next";
import React from "react";
import cls from "./newsletterNine.module.scss";


const NewsletterNine = () => {
    const { t, i18n } = useTranslation('common')
    return (
        <div className={`${cls.newsletterBanner} ${cls[i18n.language]}`}>
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
        </div >
    )
}

export default NewsletterNine