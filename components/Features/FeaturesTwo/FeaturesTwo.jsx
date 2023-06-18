import React from "react";
import cls from "./featuresTwo.module.scss"
import { Grid } from "@mui/material";

const FeaturesTwo = ({bgColor, color, padding}) => {
    return (
        <div className={cls.featureBoxesContainer} style={{backgroundColor: bgColor, padding: padding}}>
            <Grid container spacing={2}>
                <Grid item lg={3} sm={6}>
                    <div className={cls.featureBox}>
                        <i className="fa-regular fa-headset" style={{color: color}}></i>

                        <div className={cls.featureBoxContent}>
                            <h3 className="text-uppercase" style={{color: color}}>Customer Support</h3>
                            <h5 style={{color: color}}>Need Assistence?</h5>

                            <p style={{color: color}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna,
                                et dapibus lacus. Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={3} sm={6}>
                    <div className={cls.featureBox}>
                        <i className="fa-regular fa-credit-card" style={{color: color}}></i>

                        <div className={cls.featureBoxContent}>
                            <h3 style={{color: color}} className="text-uppercase">Secured Payment</h3>
                            <h5 style={{color: color}}>Safe & Fast</h5>

                            <p style={{color: color}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna,
                                et dapibus lacus. Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={3} sm={6}>
                    <div className={cls.featureBox}>
                        <i className="fa-regular fa-share" style={{color: color}}></i>

                        <div className={cls.featureBoxContent}>
                            <h3 style={{color: color}} className="text-uppercase">Free Returns</h3>
                            <h5 style={{color: color}}>Easy & Free</h5>

                            <p style={{color: color}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna,
                                et dapibus lacus. Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={3} sm={6}>
                    <div className={cls.featureBox}>
                        <i className="fa-regular fa-truck-fast" style={{color: color}}></i>

                        <div className={cls.featureBoxContent}>
                            <h3 style={{color: color}} className="text-uppercase">Free Shipping</h3>
                            <h5 style={{color: color}}>Orders Over $99</h5>

                            <p style={{color: color}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna,
                                et dapibus lacus. Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default FeaturesTwo;