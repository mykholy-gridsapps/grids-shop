import React from "react";
import cls from "./featuresEight.module.scss"
import { Grid } from "@mui/material";

const FeaturesEight = () => {
    return (
        <div className={cls.featureBoxesContainer}>
            <Grid container>
                <Grid item md={4} xs={12}>
                    <div className={cls.innerContainer}>
                        <div className={cls.featureBox}>
                            <i className="fa-regular fa-headset"></i>

                            <div className={cls.featureBoxContent}>
                                <h3 className="text-uppercase">Customer Support</h3>
                                <h5>Need Assistence?</h5>

                                <p>Lorem ipsum dolor amet, consectetur.</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item md={4} xs={12}>
                    <div className={cls.innerContainer}>
                        <div className={cls.featureBox}>
                            <i className="fa-regular fa-credit-card"></i>

                            <div className={cls.featureBoxContent}>
                                <h3 className="text-uppercase">Secured Payment</h3>
                                <h5>Safe & Fast</h5>

                                <p>Lorem ipsum dolor amet, consectetur.</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item md={4} xs={12}>
                    <div className={cls.innerContainer}>
                        <div className={cls.featureBox}>
                            <i className="fa-regular fa-share"></i>

                            <div className={cls.featureBoxContent}>
                                <h3 className="text-uppercase">Free Returns</h3>
                                <h5>Easy & Free</h5>

                                <p>Lorem ipsum dolor amet, consectetur.</p>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default FeaturesEight;