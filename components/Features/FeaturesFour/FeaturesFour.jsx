import React from "react";
import cls from "./featuresFour.module.scss"
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

const FeaturesFour = () => {
    return (
        <div className={cls.featureBoxesContainer}>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item md={4} >
                        <div className={cls.featureBox}>
                            <i className={cls.iconEarphonesAlt}></i>

                            <div className={cls.featureBoxContent}>
                                <h3 class="mb-0 pb-1">Customer Support</h3>
                                <h5 class="mb-1 pb-1">You Won't Be Alone</h5>

                                <p>We really care about you and your website as much as you do. Purchasing Porto or any
								other theme from us you get 100% free support.</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={4} >
                        <div className={cls.featureBox}>
                            <i className={cls.iconCreditCard}></i>

                            <div className={cls.featureBoxContent}>
                                <h3 class="mb-0 pb-1">Fully Customizable</h3>
                                <h5 class="mb-1 pb-1">Tons Of Options</h5>

                                <p>With Porto you can customize the layout, colors and styles within only a few minutes.
								Start creating an amazing website right now!</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={4} >
                        <div className={cls.featureBox}>
                            <i className={cls.iconActionUndo}></i>

                            <div className={cls.featureBoxContent}>
                                <h3 class="mb-0 pb-1">Powerful Admin</h3>
                                <h5 class="mb-1 pb-1">Made To Help You</h5>

                                <p>Porto has very powerful admin features to help customer to build their own shop in
								minutes without any special skills in web development.</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default FeaturesFour;