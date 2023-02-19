import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import cls from "./newsletterThirteen.module.scss";


const NewsletterThirteen = () => {
    return (
        <div className={cls.newsletterBanner}>
            <Grid container className={cls.container} justifyContent='center' alignItems="center">
                <Grid item className={cls.leftSec}>
                    <div className={cls.text} >
                        <div className={cls.newsletterContent}>
                            <h3>Get Special Offers and Savings</h3>
                            <p >Get all the latest information on Events, Sales and
                                Offers.
                            </p>
                        </div>
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

export default NewsletterThirteen