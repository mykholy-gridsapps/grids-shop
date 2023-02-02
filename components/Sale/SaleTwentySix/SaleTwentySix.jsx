import { Grid } from "@mui/material";
import React from "react";
import cls from "./saleTwentySix.module.scss"

const SaleTwentySix = () => {
    return (
        <div className={cls.banner}>
            <figure>
                <img src="./imgs/sale/sale-26-1.jpg" alt="banner" />
            </figure>

            <div className={cls.bannerLayer}>
                <Grid container justifyContent="space-between">
                    <Grid item lg={4} xs={6}>
                        <h3 class="font1 text-uppercase ls-0 mb-0">Action<br />Cameras</h3>
                    </Grid>
                    <Grid lg={4} xs={6} paddingLeft="40px">
                        <h4 class="font1 ls-n-10">Starting From <b>$399</b></h4>
                        <a href="demo21-shop.html" class="btn btn-primary ls-n-25">Shop Now</a>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default SaleTwentySix; 