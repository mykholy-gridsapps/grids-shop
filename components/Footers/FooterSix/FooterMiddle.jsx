import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import FooterBottom from "./FooterBottom";
import cls from "./footerMiddle.module.scss"

const FooterMiddle = () => {
    return (
        <div className={cls.footerMiddle}>
            <Grid container>
                <Grid item lg={3}>
                    <div className={cls.widget}>
                        <h4 className={cls.widgetTitle}>Contact Info</h4>
                        <ul className={cls.contactInfo}>
                            <li>
                                <span className={cls.contactInfoLabel}>Address:</span>1234 Street Name, City, England
                            </li>
                            <li>
                                <span className={cls.contactInfoLabel}>Phone:</span>Toll Free <a href="tel:">(123)
                                    456-7890</a>
                            </li>
                            <li>
                                <span className={cls.contactInfoLabel}>Email:</span> <a
                                    href="mailto:mail@example.com">mail@example.com</a>
                            </li>
                        </ul>
                    </div>
                </Grid>
                <Grid item lg={9}>
                    <Grid container>
                        <Grid item lg={4}>
                            <div className={cls.widget}>
                                <h4 className={cls.widgetTitle}>My Account</h4>

                                <Grid container>
                                    <Grid item sm={6}>
                                        <ul class="links mb-0">
                                            <li><a href="demo6-about.html">About us</a></li>
                                            <li><a href="demo6-contact.html">Contact us</a></li>
                                            <li><a href="dashboard.html">My Account</a></li>
                                        </ul>
                                    </Grid>

                                    <Grid item sm={6}>
                                        <ul class="links">
                                            <li><a href="#">Order history</a></li>
                                            <li><a href="#">Advanced search</a></li>
                                            <li><a href="login.html">Login</a></li>
                                        </ul>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item lg={5}>
                            <div className={cls.widget}>
                                <h4 className={cls.widgetTitle}>Main Features</h4>

                                <Grid container>
                                    <Grid item sm={6}>
                                        <ul class="links mb-0">
                                            <li><a href="#">Super Fast HTML Template</a></li>
                                            <li><a href="#">1st Fully working Ajax Theme</a></li>
                                            <li><a href="#">33 Unique Shop Layouts</a></li>
                                        </ul>
                                    </Grid>

                                    <Grid item sm={6}>
                                        <ul class="links">
                                            <li><a href="#">Powerful Admin Panel</a></li>
                                            <li><a href="#">Mobile & Retina Optimized</a></li>
                                        </ul>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item lg={3}>
                            <div className={cls.widget}>
                                <h4 className={cls.widgetTitle}>Working Days/Hours</h4>

                                <ul className={cls.contactInfo}>
                                    <li>
                                        Mon - Sun / 9:00AM - 8:00PM
                                    </li>
                                </ul>
                            </div>
                        </Grid>

                    </Grid>
                    <FooterBottom />
                </Grid>
            </Grid>
        </div >
    )
}

export default FooterMiddle;