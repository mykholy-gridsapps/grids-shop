import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import cls from "./footerMiddle.module.scss"

const FooterMiddle = ({color}) => {
    return (
        <div className={cls.footerMiddle}>
            <Grid container>
                <Grid item lg={6} xl={4}>
                    <div className={cls.widget}>
                        <h4 className={cls.widgetTitle}   style={{color: color}}>Contact Info</h4>
                        <Grid container>
                            <Grid sm={6}>
                                <div className={cls.contactWidget}>
                                    <h4 className={cls.widgetTitle}>ADDRESS:</h4>
                                    <a href="#">1234 Street Name, City, England</a>
                                </div>
                            </Grid>
                            <Grid sm={6}>
                                <div className={cls.contactWidget}>
                                    <h4 className={cls.widgetTitle}>PHONE:</h4>
                                    <a href="#">(123) 456-7890</a>
                                </div>
                            </Grid>
                            <Grid sm={6}>
                                <div className={cls.contactWidget}>
                                    <h4 className={cls.widgetTitle}>EMAIL:</h4>
                                    <a href="#">mail@example.com</a>
                                </div>
                            </Grid>
                            <Grid sm={6}>
                                <div className={cls.contactWidget}>
                                    <h4 className={cls.widgetTitle}>WORKING DAYS/HOURS:</h4>
                                    <a href="#">Mon - Sun / 9:00 AM - 8:00 PM</a>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item sm={6} lg={3} xl={4}>
                    <div className={cls.widget} >
                        <h4 className={cls.widgetTitle}  style={{color: color}}>My Account</h4>
                        <Grid container className={cls.linkParts}>
                            <Grid item component='ul' xl={4} className={cls.linkPart}>
                                <li><a href="demo3-about.html">About Us</a></li>
                                <li><a href="demo3-contact.html">Contact Us</a></li>
                                <li><a href="dashboard.html">My Account</a></li>
                            </Grid>
                            <Grid item component='ul' xl={8} className={cls.linkPart}>
                                <li className="pl-xl-2 ml-xl-1"><a href="#">Orders History</a></li>
                                <li className="pl-xl-2 ml-xl-1"><a href="#">Advanced Search</a></li>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item sm={6} lg={3} xl={4}>
                    <div className={cls.widget} >
                        <h4 className={cls.widgetTitle}  style={{color: color}}>Main Features</h4>
                        <Grid container className={cls.linkParts}>
                            <Grid item component='ul' xl={6} className={cls.linkPart}>
                                <li><a href="#">Super Fast HTML Template</a></li>
                                <li><a href="#">1st Fully working Ajax Theme</a></li>
                                <li><a href="#">33 Unique Shop Layouts</a></li>
                            </Grid>
                            <Grid item component='ul' xl={6} className={cls.linkPart}>
                                <li><a href="#">Powerful Admin Panel</a></li>
                                <li><a href="#">Mobile &amp; Retina Optimized</a></li>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>


            </Grid>
        </div >
    )
}

export default FooterMiddle;