import { Container, Grid } from "@mui/material";
import { i18n, useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

import cls from "./saleTwentyEight.module.scss"

const SaleTwentyEight = () => {
    const { t, i18n } = useTranslation('common');
    return (
        <div className={`${cls.banner} ${cls[i18n.language]}`}>
            <Container maxWidth="xxl">
                <Grid container alignItems="center">
                    <Grid item lg={5} sm={7} xs={10} >
                        <h5><i>Available Once a year</i></h5>
                        <div className={cls.inlineBlock}>
                            <h2>Get 30% off on orders over $299</h2>
                            <p>* Selected books</p>
                        </div>
                    </Grid>
                    <Grid item lg={3} xs={7} >
                        <Link href="demo25-shop.html">Explore Books <i className="fas fa-long-arrow-alt-right"></i></Link>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default SaleTwentyEight; 