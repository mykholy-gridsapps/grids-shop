import { Grid } from "@mui/material";
import React from "react";
import cls from "./saleTwentyNine.module.scss"

const SaleTwentyNine = () => {
    return (
        <div className={cls.banner}>
            <Grid container>
                <Grid item padding='5px' md={4}>
                    <div className={cls.banner1}>
                        <figure>
                            <img src="./imgs/sale/sale-29-1.jpg" alt="banner" width="640" height="640" />
                        </figure>
                    </div>
                </Grid>
                <Grid item padding='5px' md={8}>
                    <div className={cls.banner2}>
                        <h4>Get Ready</h4>
                        <h2>20% off</h2>
                        <a href="demo27-shop.html">Shop All Sale</a>
                        <h3>BIKES</h3>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default SaleTwentyNine; 