import { Grid } from "@mui/material";
import React from "react";
import cls from "./saleTwentySeven.module.scss"

const SaleTwentySeven = () => {
    return (
        <div className={cls.banner}>
            <Grid container alignItems="center">
                <Grid item md={6} lg={3} alignSelf="baseline">
                    <figure>
                        <img src="./imgs/sale/sale-27-1.jpg" alt="image" width="380" height="136" />
                    </figure>
                </Grid>
                <Grid item md={6} lg={4} padding="30px 0">
                    <h3>Check new arrivals</h3>
                    <h2>Explore Smartphones</h2>
                </Grid>
                <Grid item md={6} lg={3} padding="0 56px">
                    <h4>Exclusive COUPON</h4>
                    <h5><i>UP TO</i><b>$200</b><sub>OFF</sub>
                    </h5>
                </Grid>
                <Grid item md={6} lg={2} padding="30px 0">
                    <div class="px-5 px-md-0">
                        <a href="demo22-shop.html" >View All Now</a>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default SaleTwentySeven; 