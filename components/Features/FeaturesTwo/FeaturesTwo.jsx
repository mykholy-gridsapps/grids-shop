import React from "react";
import cls from "./featuresTwo.module.scss"
import { Grid } from "@mui/material";

const FeaturesTwo = () => {
    return (
        <div className={cls.featureBoxesContainer}>
            <Grid container spacing={2}>
                <Grid item lg={3} sm={6}>
                    <div className={cls.featureBox}>
                        <i class="fa-regular fa-headset"></i>

                        <div className={cls.featureBoxContent}>
                            <h3 class="text-uppercase">Customer Support</h3>
                            <h5>Need Assistence?</h5>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna,
                                et dapibus lacus. Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={3} sm={6}>
                    <div className={cls.featureBox}>
                        <i class="fa-regular fa-credit-card"></i>

                        <div className={cls.featureBoxContent}>
                            <h3 class="text-uppercase">Secured Payment</h3>
                            <h5>Safe & Fast</h5>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna,
                                et dapibus lacus. Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={3} sm={6}>
                    <div className={cls.featureBox}>
                        <i class="fa-regular fa-share"></i>

                        <div className={cls.featureBoxContent}>
                            <h3 class="text-uppercase">Free Returns</h3>
                            <h5>Easy & Free</h5>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna,
                                et dapibus lacus. Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={3} sm={6}>
                    <div className={cls.featureBox}>
                        <i class="fa-regular fa-truck-fast"></i>

                        <div className={cls.featureBoxContent}>
                            <h3 class="text-uppercase">Free Shipping</h3>
                            <h5>Orders Over $99</h5>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna,
                                et dapibus lacus. Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default FeaturesTwo;