import React from "react";

import Grid from "@mui/material/Grid";

import cls from "./featuresThirteen.module.scss"

const FeaturesThirteen = () => {
    return (
        <div className={cls.featureBoxesContainer}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item sm={6} md={4} lg={3} xs={12}>
                    <div className={cls.innerContainer}>
                        <div className={cls.featureBox}>
                            <i className="fa-regular fa-headset"></i>

                            <div className={cls.featureBoxContent}>
                                <h3 className="text-uppercase">Support</h3>

                                <p>Lorem ipsum dolor amet, consectetur.</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item sm={6} md={4} lg={3} xs={12}>
                    <div className={cls.innerContainer}>
                        <div className={cls.featureBox}>
                            <i className="fa-regular fa-credit-card"></i>

                            <div className={cls.featureBoxContent}>
                                <h3 className="text-uppercase">Secured Payment</h3>

                                <p>Lorem ipsum dolor amet, consectetur.</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item sm={6} md={4} lg={3} xs={12}>
                    <div className={cls.innerContainer}>
                        <div className={cls.featureBox}>
                            <i className="fa-regular fa-share"></i>

                            <div className={cls.featureBoxContent}>
                                <h3 className="text-uppercase">Free Returns</h3>

                                <p>Lorem ipsum dolor amet, consectetur.</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item sm={6} md={4} lg={3} xs={12}>
                    <div className={cls.innerContainer}>
                        <div className={cls.featureBox}>
                            <i className="fa-regular fa-share"></i>

                            <div className={cls.featureBoxContent}>
                                <h3 className="text-uppercase">Free Returns</h3>

                                <p>Lorem ipsum dolor amet, consectetur.</p>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default FeaturesThirteen;