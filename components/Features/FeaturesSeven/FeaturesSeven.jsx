import React from "react";
import cls from "./featuresSeven.module.scss"
import { Grid } from "@mui/material";

const FeaturesSeven = () => {
    return (
        <div className={cls.featureBoxesContainer}>
            <Grid container>
                <Grid item lg={12}>
                    <div className={cls.featureBox}>
                        <i class="fa-regular fa-headset"></i>

                        <div className={cls.featureBoxContent}>
                            <h3 class="text-uppercase">Customer Support</h3>
                            <h5>Need Assistence?</h5>

                            <p>Lorem ipsum dolor amet, consectetur.</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={12}>
                    <div className={cls.featureBox}>
                        <i class="fa-regular fa-credit-card"></i>

                        <div className={cls.featureBoxContent}>
                            <h3 class="text-uppercase">Secured Payment</h3>
                            <h5>Safe & Fast</h5>

                            <p>Lorem ipsum dolor amet, consectetur.</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={12}>
                    <div className={cls.featureBox}>
                        <i class="fa-regular fa-share"></i>

                        <div className={cls.featureBoxContent}>
                            <h3 class="text-uppercase">Free Returns</h3>
                            <h5>Easy & Free</h5>

                            <p>Lorem ipsum dolor amet, consectetur.</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default FeaturesSeven;