import { Grid } from "@mui/material";
import React from "react";
import cls from "./newsletterFourteen.module.scss";


const NewsletterFourteen = () => {
    return (
        <div className={cls.newsletterBanner}>
            <Grid container justifyContent='center' alignItems="center">
                <Grid className={cls.text} item >
                    <i class="fa-regular fa-envelope"></i>

                    <div className={cls.newsletterContent}>
                        <h3>Get Special Offers and Savings</h3>
                        <p >Get all the latest information on Events, Sales and
                            Offers.
                        </p>
                    </div>
                </Grid>
                <Grid item className={cls.rightSec}>
                    <form action="#">
                        <input type="email" placeholder="Email Your E-mail Address..." required />
                        <button>SIGN UP</button>
                    </form>
                </Grid>
            </Grid >
        </div >
    )
}

export default NewsletterFourteen