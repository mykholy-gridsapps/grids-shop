import { Grid } from "@mui/material";
import React from "react";
import cls from "./infoBoxSeven.module.scss"


const InfoBoxSeven = () => {
    return (
        <div className={cls.infoBoxesContainer}>
            <Grid container spacing={2}>
                <Grid item className={cls.infoBox} lg={4}>
                    <i class="fa-light fa-truck-fast"></i>

                    <div>
                        <h4>FREE SHIPPING &amp; RETURN</h4>
                        <p>Free shipping on all orders over $99</p>
                    </div>
                </Grid>
                <Grid item className={cls.infoBox} lg={4}>
                    <i class="fa-light fa-circle-dollar"></i>

                    <div>
                        <h4>MSevenY BACK GUARANTEE</h4>
                        <p>100% mSeveny back guarantee</p>
                    </div>
                </Grid>
                <Grid item className={cls.infoBox} lg={4}>
                    <i class="fa-solid fa-clock-rotate-left"></i>

                    <div>
                        <h4>ONLINE SUPPORT 24/7</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </Grid>
            </Grid>

        </div>
    )

}
export default InfoBoxSeven