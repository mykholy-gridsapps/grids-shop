import React from "react";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import cls from "./featuresSeventeen.module.scss"

const FeaturesSeventeen = () => {
    return (
        <div className={cls.featureBoxesContainer}>
            <Container maxWidth="xxl">
                <Grid container spacing={2} justifyContent="center">
                    <Grid item sm={6} md={4} lg={3} xl={12 / 5} xs={12}>
                        <div className={cls.featureBox}>
                            <i className="fa-regular fa-headset"></i>

                            <div className={cls.featureBoxContent}>
                                <h3 className="text-uppercase">Support</h3>
                                <p>Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={6} md={4} lg={3} xl={12 / 5} xs={12}>
                        <div className={cls.featureBox}>
                            <i className="fa-regular fa-credit-card"></i>

                            <div className={cls.featureBoxContent}>
                                <h3 className="text-uppercase">Secured Payment</h3>
                                <p>Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={6} md={4} lg={3} xl={12 / 5} xs={12}>
                        <div className={cls.featureBox}>
                            <i className="fa-regular fa-share"></i>

                            <div className={cls.featureBoxContent}>
                                <h3 className="text-uppercase">Free Returns</h3>
                                <p>Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={6} md={4} lg={3} xl={12 / 5} xs={12}>
                        <div className={cls.featureBox}>
                            <i className="fa-regular fa-share"></i>

                            <div className={cls.featureBoxContent}>
                                <h3 className="text-uppercase">Free Returns</h3>
                                <p>Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={6} md={4} lg={3} xl={12 / 5} xs={12}>
                        <div className={cls.featureBox}>
                            <i className="fa-regular fa-headset"></i>

                            <div className={cls.featureBoxContent}>
                                <h3 className="text-uppercase">Support</h3>
                                <p>Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default FeaturesSeventeen;