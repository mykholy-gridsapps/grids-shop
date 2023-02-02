import { Grid } from "@mui/material";
import React from "react";
import cls from "./saleFourteen.module.scss"

const SaleFourteen = () => {
    return (
        <div className={cls.banner}>
            <Grid container alignItems={'center'}>
                <Grid item md={4} className={cls.col1}>
                    <h4 class="align-left text-uppercase mb-0">Furniture &amp; Garden</h4>
                    <h3 class="text-white mb-0 align-left text-uppercase">Huge Sale</h3>
                </Grid>
                <Grid item className={cls.col2}>
                    <h5 class="text-white mb-0 position-relative align-left">50<small>%<ins>OFF</ins></small></h5>
                </Grid>
                <Grid item md={4} xs={3} className={cls.col3}>
                    <a href="demo8-shop.html" class="btn btn-lg btn-primary">Shop Now!</a>
                </Grid>
            </Grid>
        </div>
    )
}
export default SaleFourteen; 