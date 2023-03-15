import { Grid } from "@mui/material";
import React from "react";
import cls from "./infoBoxNine.module.scss"


const InfoBoxNine = () => {
    return (
        <div className={cls.infoBoxesContainer}>
            <Grid container spacing={2}>
                <Grid item className={cls.infoBox} lg={4}>
                    <i className="fa-solid fa-desktop"></i>

                    <div>
                        <h4>Responsive & Retina Ready</h4>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta.</p>
                    </div>
                </Grid>
                <Grid item className={cls.infoBox} lg={4}>
                    <i className="fa-solid fa-cube"></i>

                    <div>
                        <h4>Lots of Features</h4>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta.</p>
                    </div>
                </Grid>
                <Grid item className={cls.infoBox} lg={4}>
                    <i className="fa-regular fa-comments"></i>

                    <div>
                        <h4>ONLINE SUPPORT 24/7</h4>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta.</p>
                    </div>
                </Grid>
            </Grid>

        </div>
    )

}
export default InfoBoxNine