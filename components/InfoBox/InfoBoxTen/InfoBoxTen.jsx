import { Grid } from "@mui/material";
import React from "react";
import cls from "./infoBoxTen.module.scss"


const InfoBoxTen = () => {
    return (
        <div className={cls.infoBoxesContainer}>
            <Grid container >
                <Grid item className={cls.infoBox} lg={4} sm={6}>
                    <i className="fa-solid fa-desktop"></i>

                    <div>
                        <h4>Responsive & Retina Ready</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta.</p>
                    </div>
                </Grid>
                <Grid item className={cls.infoBox} lg={4} sm={6}>
                    <i className="fa-solid fa-crop"></i>

                    <div>
                        <h4>Layout Versions</h4>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. </p>
                    </div>
                </Grid>
                <Grid item className={cls.infoBox} lg={4} sm={6}>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>

                    <div>
                        <h4>Power of Flexibility</h4>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. </p>
                    </div>
                </Grid>
                <Grid item className={cls.infoBox} lg={4} sm={6}>
                    <i className="fa-regular fa-pen-to-square"></i>

                    <div>
                        <h4>Unlimted Colors</h4>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. </p>
                    </div>
                </Grid>
                <Grid item className={cls.infoBox} lg={4} sm={6}>
                    <i className="fa-solid fa-cube"></i>

                    <div>
                        <h4>Lots of Features</h4>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. </p>
                    </div>
                </Grid>
                <Grid item className={cls.infoBox} lg={4} sm={6}>
                    <i className="fa-regular fa-comments"></i>

                    <div>
                        <h4>Customer Support</h4>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. </p>
                    </div>
                </Grid>
            </Grid>

        </div>
    )

}
export default InfoBoxTen