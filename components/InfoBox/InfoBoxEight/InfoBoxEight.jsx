import { Grid } from "@mui/material";
import React from "react";
import cls from "./infoBoxEight.module.scss"


const InfoBoxEight = () => {
    return (
        <div className={cls.infoBoxesContainer}>
            <Grid container >
                <Grid item className={cls.infoBox} lg={4} md={6}>
                    <div className={cls.thumb}>
                        <img src="./imgs/infobox/icon-1.webp" alt="" />
                        <h3>GREATE VALUE</h3>
                    </div>

                    <div className={cls.text}>
                        <p>We offer competitive prices on our 100M items</p>
                    </div>
                </Grid>
                <Grid item className={cls.infoBox} lg={4} md={6}>
                    <div className={cls.thumb}>
                        <img src="./imgs/infobox/icon-2.webp" alt="" />
                        <h3>WORLDWIDE DELIVERY</h3>
                    </div>

                    <div className={cls.text}>
                        <p>With sites in 5 languages, we ship to over all the world</p>
                    </div>
                </Grid>
                <Grid item className={cls.infoBox} lg={4} md={6}>
                    <div className={cls.thumb}>
                        <img src="./imgs/infobox/icon-3.webp" alt="" />
                        <h3>SAFE PAYMENT</h3>
                    </div>

                    <div className={cls.text}>
                        <p>Pay with the world’s most secure payment methods.</p>
                    </div>
                </Grid>
                <Grid item className={cls.infoBox} lg={4} md={6}>
                    <div className={cls.thumb}>
                        <img src="./imgs/infobox/icon-4.webp" alt="" />
                        <h3>SHOP WITH CONFIDENCE</h3>
                    </div>

                    <div className={cls.text}>
                        <p>Our buyer protection covers your purchase</p>
                    </div>
                </Grid>
                <Grid item className={cls.infoBox} lg={4} md={6}>
                    <div className={cls.thumb}>
                        <img src="./imgs/infobox/icon-5.webp" alt="" />
                        <h3>24/7 HELP CENTER</h3>
                    </div>

                    <div className={cls.text}>
                        <p>Our assistance for a smooth shopping experience.</p>
                    </div>
                </Grid>
                <Grid item className={cls.infoBox} lg={4} md={6}>
                    <div className={cls.thumb}>
                        <img src="./imgs/infobox/icon-6.webp" alt="" />
                        <h3>SHOP ON-THE-GO</h3>
                    </div>

                    <div className={cls.text}>
                        <p>Download the app and get the world at your fingertips.</p>
                    </div>
                </Grid>
            </Grid>

        </div>
    )

}
export default InfoBoxEight