import { Grid } from "@mui/material"
import React from "react"
import cls from "./infoBoxFour.module.scss"


const InfoBoxFour = () => {
    return (
        <div className={cls.infoBoxesContainer}>
            <Grid container >
                <Grid item className={cls.infoBox} lg={3} md={6}>
                    <i class="fa-light fa-truck-fast"></i>

                    <div>
                        <h4>FREE SHIPPING &amp; RETURN</h4>
                    </div>
                </Grid>
                <Grid item className={cls.infoBox} lg={3} md={6}>
                    <i class="fa-light fa-circle-dollar"></i>

                    <div>
                        <h4>MFourY BACK GUARANTEE</h4>
                    </div>
                </Grid>
                <Grid item className={cls.infoBox} lg={3} md={6}>
                    <i class="fa-solid fa-clock-rotate-left"></i>

                    <div>
                        <h4>ONLINE SUPPORT 24/7</h4>
                    </div>
                </Grid>
                <Grid item className={cls.infoBox} lg={3} md={6}>
                    <i class="fa-regular fa-credit-card-front"></i>

                    <div>
                        <h4>SECURE PAYMENT</h4>
                    </div>
                </Grid>
            </Grid>

        </div>
    )

}
export default InfoBoxFour