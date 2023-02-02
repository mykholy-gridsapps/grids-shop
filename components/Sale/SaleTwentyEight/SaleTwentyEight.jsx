import { Container, Grid } from "@mui/material";
import React from "react";
import cls from "./saleTwentyEight.module.scss"

const SaleTwentyEight = () => {
    return (
        <div className={cls.banner}>
            <Container maxWidth="xxl">
                <Grid container alignItems="center">
                    <Grid item lg={5} sm={7} xs={10} >
                        <h5><i>Available Once a year</i></h5>
                        <div className={cls.inlineBlock}>
                            <h2>Get 30% off on orders over $299</h2>
                            <p>* Selected books</p>
                        </div>
                    </Grid>
                    <Grid lg={3} xs={7} >
                        <a href="demo25-shop.html">Explore Books <i class="fas fa-long-arrow-alt-right"></i></a>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default SaleTwentyEight; 