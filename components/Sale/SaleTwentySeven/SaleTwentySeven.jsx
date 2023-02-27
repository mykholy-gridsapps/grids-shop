import { Grid } from "@mui/material";
import { i18n, useTranslation } from "next-i18next";
import Link from "next/link";

import React from "react";

import cls from "./saleTwentySeven.module.scss"

const SaleTwentySeven = () => {
    const { t, i18n } = useTranslation('common');
    return (
        <div className={`${cls.banner} ${cls[i18n.language]}`}>
            <Grid container alignItems="center">
                <Grid item md={4} lg={3} alignSelf="baseline">
                    <figure>
                        <img src="./imgs/sale/sale-27-1.jpg" alt="image" width="380" height="136" />
                    </figure>
                </Grid>
                <Grid item md={8} sm={6} xs={12} lg={4} className={cls.text1} >
                    <h3>Check new arrivals</h3>
                    <h2>Explore Smartphones</h2>
                </Grid>
                <Grid item md={6} sm={6} xs={7} lg={3} className={cls.text2}>
                    <h4>Exclusive COUPON</h4>
                    <h5><i>UP TO</i><b>$§١</b><sub>OFF</sub>
                    </h5>
                </Grid>
                <Grid item md={6} lg={2} sm={12} xs={5} className={cls.btn} >
                    <div>
                        <Link href="demo22-shop.html" >View All Now</Link>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default SaleTwentySeven; 