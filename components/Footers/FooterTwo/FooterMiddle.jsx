import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import cls from "./footerMiddle.module.scss"

const FooterMiddle = () => {
    return (
        <div className={cls.footerMiddle}>
            <Container maxWidth="xl" className={cls.positionStatic}>
                <div className={cls.footerRibbon}>Get in touch</div>
                <Grid container>
                    <Grid item lg={3} md={4}>
                        <div className={cls.widget}>
                            <h4 className={[cls.widgetTitle, cls.fontWeightBold].join(' ')}>Contact Info</h4>
                            <ul className={cls.contactInfo}>
                                <li>
                                    <span className={cls.contactInfoLabel}>Address:</span>123 Street Name, City, England
                                </li>
                                <li>
                                    <span className={cls.contactInfoLabel}>Phone:</span><a href="tel:">(123) 456-7890</a>
                                </li>
                                <li>
                                    <span className={cls.contactInfoLabel}>Email:</span> <a href="mailto:mail@example.com">mail@example.com</a>
                                </li>
                                <li>
                                    <span className={cls.contactInfoLabel}>Working Days/Hours:</span> Mon - Sun / 9:00 AM - 8:00 PM
                                </li>
                            </ul>
                            <div>
                                <a href="#" className={[cls.socialIcon, cls.iconFacebook].join(' ')} target="_blank" title="Facebook"></a>
                                <a href="#" className={[cls.socialIcon, cls.iconTwitter].join(' ')} target="_blank" title="Twitter"></a>
                                <a href="#" className={[cls.socialIcon, cls.iconLinkedin, 'fab fa-linkedin-in'].join(' ')} target="_blank" title="Linkedin"></a>
                            </div>
                        </div>
                    </Grid>

                    <Grid item lg={9} md={8}>
                        <Box component='div' className={[cls.widget, cls.widgetNewsletter].join(' ')}>
                            <h4 className={cls.widgetTitle} >Subscribe newsletter</h4>
                            <Grid container alignItems="center" sx={{ pt: '9px !important' }} spacing={2}>
                                <Grid item lg={6} md={12} sx={{ mb: "10px", pt: '0 !important' }}>
                                    <p>Get all the latest information on Events, Sales and Offers. Sign up for
                                        newsletter today.</p>
                                </Grid>

                                <Grid item lg={6} md={12} sx={{ mb: "10px", pt: '0 !important' }}>
                                    <form>
                                        <input type="email" className={cls.formControl} placeholder="Email Address" required />

                                        <input type="submit" className={cls.btn} value="Subscribe" />
                                    </form>
                                </Grid>
                            </Grid>
                        </Box>
                        <Grid container spacing={2}>
                            <Grid item sm={5}>
                                <div className={cls.widget}>
                                    <Box component="h4" className={cls.widgetTitle} sx={{ mb: '10px' }}>Customer Service</Box>

                                    <Grid container spacing={2} className={cls.linkParts}>
                                        <Grid item component='ul' lg={6} md={12} className={cls.linkPart}>
                                            <li><a href="demo2-about.html">About us</a></li>
                                            <li><a href="demo2-contact.html">Contact us</a></li>
                                            <li><a href="login.html">My account</a></li>
                                        </Grid>
                                        <Grid item component='ul' lg={6} md={12} className={cls.linkPart}>
                                            <li><a href="#">Order history</a></li>
                                            <li><a href="#">Advanced search</a></li>
                                            <li><a href="login.html">Login</a></li>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid item sm={7}>
                                <div className={cls.widget}>
                                    <Box component="h4" className={cls.widgetTitle} sx={{ mb: '10px' }}>About Us</Box>

                                    <Grid container spacing={2} className={cls.linkParts}>
                                        <Grid item component='ul' lg={6} md={12} className={cls.linkPart}>
                                            <li><a href="#">Super Fast Html Template</a></li>
                                            <li><a href="#">1st Fully working Ajax Theme</a></li>
                                            <li><a href="#">36 Unique Shop Layouts</a></li>
                                        </Grid>
                                        <Grid item component='ul' lg={6} md={12} className={cls.linkPart}>
                                            <li><a href="#">Powerful Admin Panel</a></li>
                                            <li><a href="#">Mobile & Retina Optimized</a></li>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container >
        </div >
    )
}

export default FooterMiddle;