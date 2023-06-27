import React from "react";
import Grid from "@mui/material/Grid";

import { useTranslation } from "next-i18next";

import cls from "./featuresNineteen.module.scss"

const FeaturesNineteen = () => {
    const { i18n } = useTranslation();

    return (
        <div className={cls.featureBoxesContainer}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item md={4} lg={3} xl={12 / 5}>
                    <div className={`${cls.featureBox} ${cls[i18n.language]}`}>
                        <i className="fa-regular fa-truck"></i>

                        <div className={cls.featureBoxContent}>
                            <h3 className="mb-0 pb-1">Customer Support</h3>
                            <h5 className="mb-1 pb-1">You Wont Be Alone</h5>
                        </div>
                    </div>
                </Grid>
                <Grid item md={4} lg={3} xl={12 / 5}>
                    <div className={`${cls.featureBox} ${cls[i18n.language]}`}>
                        <i className="fa-regular fa-truck"></i>

                        <div className={cls.featureBoxContent}>
                            <h3 className="mb-0 pb-1">Fully Customizable</h3>
                            <h5 className="mb-1 pb-1">Tons Of Options</h5>
                        </div>
                    </div>
                </Grid>
                <Grid item md={4} lg={3} xl={12 / 5}>
                    <div className={`${cls.featureBox} ${cls[i18n.language]}`}>
                        <i className="fa-regular fa-truck"></i>

                        <div className={cls.featureBoxContent}>
                            <h3 className="mb-0 pb-1">Powerful Admin</h3>
                            <h5 className="mb-1 pb-1">Made To Help You</h5>
                        </div>
                    </div>
                </Grid>
                <Grid item md={4} lg={3} xl={12 / 5}>
                    <div className={`${cls.featureBox} ${cls[i18n.language]}`}>
                        <i className="fa-regular fa-truck"></i>

                        <div className={cls.featureBoxContent}>
                            <h3 className="mb-0 pb-1">Powerful Admin</h3>
                            <h5 className="mb-1 pb-1">Made To Help You</h5>
                        </div>
                    </div>
                </Grid>
                <Grid item md={4} lg={3} xl={12 / 5}>
                    <div className={`${cls.featureBox} ${cls[i18n.language]} ${cls.last}`}>
                        <i className="fa-regular fa-truck"></i>

                        <div className={cls.featureBoxContent}>
                            <h3 className="mb-0 pb-1">Powerful Admin</h3>
                            <h5 className="mb-1 pb-1">Made To Help You</h5>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default FeaturesNineteen;