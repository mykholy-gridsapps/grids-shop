import { Grid } from "@mui/material";
import Link from "next/link";
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
                        <h3>Action<br />Cameras</h3>
                    </Grid>
                    <Grid item lg={4} xs={6} className={cls.text2}>
                        <h4>Starting From <b>$399</b></h4>
                        <Link href="demo21-shop.html" className="btn btn-primary ls-n-25">Shop Now</Link>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default SaleTwentySix; 