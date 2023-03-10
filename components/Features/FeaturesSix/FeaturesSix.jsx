import React from "react";
import cls from "./featuresSix.module.scss"
import { Grid } from "@mui/material";

const FeaturesSix = () => {
    return (
        <div className={cls.featureBoxesContainer}>
            <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                    <div className={cls.featureBox}>
                        <div className={cls.featureContent}>

                            <i className={cls.iconEarphonesAlt}></i>

                            <div className={cls.featureBoxContent}>
                                <h3 className="mb-0 pb-1">Customer Support</h3>
                                <h5 className="mb-1 pb-1">Need Assistance?</h5>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.
                                </p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item md={4} xs={12}>
                    <div className={cls.featureBox}>
                        <div className={cls.featureContent}>

                            <i className={cls.iconCreditCard}></i>

                            <div className={cls.featureBoxContent}>
                                <h3 className="mb-0 pb-1">Secured Payment</h3>
                                <h5 className="mb-1 pb-1">Safe & Fast</h5>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.
                                </p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item md={4} xs={12}>
                    <div className={cls.featureBox}>
                        <div className={cls.featureContent}>

                            <i className={cls.iconActionUndo}></i>

                            <div className={cls.featureBoxContent}>
                                <h3 className="mb-0 pb-1">Returns</h3>
                                <h5 className="mb-1 pb-1">Easy & Free</h5>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.
                                </p>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default FeaturesSix;