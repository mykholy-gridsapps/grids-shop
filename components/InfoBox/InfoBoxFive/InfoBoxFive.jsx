import { Grid } from "@mui/material";
import React from "react";
import cls from "./infoBoxFive.module.scss"


const InfoBoxFive = ({marginBottom}) => {
    return (
        <div className={cls.infoBoxesContainer} style={{marginBottom: marginBottom}}>
            <Grid container >
                <Grid item className={cls.infoBox} lg={4}>
                    <i className="fa-light fa-truck-fast"></i>

                    <div>
                        <h4>FREE SHIPPING &amp; RETURN</h4>
                        <p>Free shipping on all orders over $99</p>
                    </div>
                </Grid>
                <Grid item className={cls.infoBox} lg={4}>
                    <i className="fa-light fa-circle-dollar"></i>

                    <div>
                        <h4>MFiveY BACK GUARANTEE</h4>
                        <p>100% mFivey back guarantee</p>
                    </div>
                </Grid>
                <Grid item className={cls.infoBox} lg={4}>
                    <i className="fa-solid fa-clock-rotate-left"></i>

                    <div>
                        <h4>ONLINE SUPPORT 24/7</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </Grid>
            </Grid>

        </div>
    )

}
export default InfoBoxFive