import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import cls from "./footerMiddle.module.scss"

const FooterMiddle = () => {
    return (
        <div className={cls.footerMiddle}>
            <Container maxWidth="xl" className={cls.positionStatic}>
                <Grid container>
                    <Grid item lg={9}>
                        <Grid container>
                            <Grid item sm={4}>
                                <div className={cls.widget}>
                                    <h4 className={[cls.widgetTitle, cls.fontWeightBold].join(' ')}>Contact Info</h4>
                                    <ul className={cls.contactInfo}>
                                        <li>
                                            <span className={cls.contactInfoLabel}>Phone:</span><a href="tel:">(123) 456-7890</a>
                                        </li>
                                        <li>
                                            <span className={cls.contactInfoLabel}>Email:</span> <a href="mailto:mail@example.com">mail@example.com</a>
                                        </li>
                                    </ul>
                                    <div>
                                        <a href="#" className={[cls.socialIcon, cls.iconFacebook].join(' ')} target="_blank" title="Facebook"></a>
                                        <a href="#" className={[cls.socialIcon, cls.iconTwitter].join(' ')} target="_blank" title="Twitter"></a>
                                        <a href="#" className={[cls.socialIcon, cls.iconLinkedin, 'fab fa-linkedin-in'].join(' ')} target="_blank" title="Linkedin"></a>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item sm={4}>
                                <div className={cls.widget}>
                                    <h4 className={[cls.widgetTitle, cls.fontWeightBold].join(' ')}>Customer Service</h4>
                                    <ul className={cls.links}>
                                        <li><a href="demo8-about.html">About Us</a></li>
                                        <li><a href="demo8-contact.html">Contact Us</a></li>
                                        <li><a href="dashboard.html">My Account</a></li>
                                        <li><a href="#">Orders history</a></li>
                                        <li><a href="#">Advanced search</a></li>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item sm={4}>
                                <div className={cls.widget}>
                                    <h4 className={[cls.widgetTitle, cls.fontWeightBold].join(' ')}>ABOUT US</h4>
                                    <ul className={cls.links}>
                                        <li><a href="demo8-about.html">Super Fast HTML Template</a></li>
                                        <li><a href="demo8-contact.html">Top Rated Theme in Themeforest</a></li>
                                        <li><a href="my-account.html">33 Unique Shop Demos</a></li>
                                        <li><a href="#">Powerful Admin Panel</a></li>
                                        <li><a href="#">Mobile & Retina Optimized</a></li>
                                    </ul>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={3}>
                        <Box component='div' className={[cls.widget, cls.widgetNewsletter].join(' ')}>
                            <h4 className={cls.widgetTitle} >Download App on Mobile:</h4>
                            <p>15% discount on your first purchase</p>
                            <div className={cls.btns}>
                                <img src="/imgs/google-play.svg" alt="button" />
                                <img src="/imgs/app-store.svg" alt="button" />
                            </div>
                        </Box>
                    </Grid>

                </Grid>
            </Container >
        </div >
    )
}

export default FooterMiddle;