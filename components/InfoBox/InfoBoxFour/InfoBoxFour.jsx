import { Grid } from "@mui/material"
import React from "react"
import cls from "./infoBoxFour.module.scss"


const InfoBoxFour = ({marginBottom, fontSize, iconSize}) => {
    return (
        <div className={cls.infoBoxesContainer} style={{marginBottom: marginBottom}}>
            <Grid container >
                <Grid item className={cls.infoBox} lg={3} md={6}>
                    <i className="fa-light fa-truck-fast" style={{fontSize: iconSize}}></i>

                    <div>
                        <h4 style={{fontSize: fontSize}}>FREE SHIPPING &amp; RETURN</h4>
                    </div>
                </Grid>
                <Grid item className={cls.infoBox} lg={3} md={6}>
                    <i className="fa-light fa-circle-dollar" style={{fontSize: iconSize}}></i>

                    <div>
                        <h4 style={{fontSize: fontSize}}>MFourY BACK GUARANTEE</h4>
                    </div>
                </Grid>
                <Grid item className={cls.infoBox} lg={3} md={6}>
                    <i className="fa-solid fa-clock-rotate-left" style={{fontSize: iconSize}}></i>

                    <div>
                        <h4 style={{fontSize: fontSize}}>ONLINE SUPPORT 24/7</h4>
                    </div>
                </Grid>
                <Grid item className={cls.infoBox} lg={3} md={6}>
                    <i className="fa-regular fa-credit-card-front" style={{fontSize: iconSize}}></i>

                    <div>
                        <h4 style={{fontSize: fontSize}}>SECURE PAYMENT</h4>
                    </div>
                </Grid>
            </Grid>

        </div>
    )

}
export default InfoBoxFour