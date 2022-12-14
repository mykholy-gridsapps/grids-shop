import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import cls from "./footerMiddle.module.scss"

const FooterMiddle = () => {
    return (
        <div className={cls.footerMiddle}>
            <Container maxWidth="xl" className={cls.positionStatic}>
                <Grid container>
                    <Grid item lg={3} sm={6}>
                        <div className={cls.widget}>
                            <h4 className={[cls.widgetTitle, cls.fontWeightBold].join(' ')}>Contact Info</h4>
                            <ul className={cls.contactInfo}>
                                <li>
                                    <span className={cls.contactInfoLabel}>Address:</span>1234 Street Name, City, England
                                </li>
                                <li>
                                    <span className={cls.contactInfoLabel}>Phone:</span>Toll Free <a href="tel:">(123)
                                        456-7890</a>
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
                    <Grid item lg={3} sm={6}>
                        <div className={cls.widget}>
                            <h4 className={[cls.widgetTitle, cls.fontWeightBold].join(' ')}>Customer Service</h4>
                            <ul className={cls.links}>
                                <li><a href="#">Help & FAQs</a></li>
                                <li><a href="#">Order Tracking</a></li>
                                <li><a href="#">Shipping & Delivery</a></li>
                                <li><a href="#">Orders History</a></li>
                                <li><a href="#">Advanced search</a></li>
                                <li><a href="dashboard.html">My Account</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="demo9-about.html">About Us</a></li>
                                <li><a href="demo9-contact.html">Contact Us</a></li>
                                <li><a href="#">Corporate Sales</a></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item lg={3} sm={6}>
                        <div className={cls.widget}>
                            <h4 className={[cls.widgetTitle, cls.fontWeightBold].join(' ')}>MAIN FEATURES</h4>
                            <ul className={cls.links}>
                                <li><a href="#">Super Fast HTML Template</a></li>
                                <li><a href="#">Top Rated HTML Template</a></li>
                                <li><a href="#">33 Unique Shop Layouts</a></li>
                                <li><a href="#">Powerful Wordpress Features</a></li>
                                <li><a href="#">Mobile & Retina Optimized</a></li>
                                <li><a href="#">Super Fast HTML Template</a></li>
                                <li><a href="#">Top Rated HTML Template</a></li>
                                <li><a href="#">33 Unique Shop Layouts</a></li>
                                <li><a href="#">Powerful Wordpress Features</a></li>
                                <li><a href="#">Mobile & Retina Optimized</a></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item lg={3} sm={6} sx={{ pb: '0' }}>
                        <Box component='div' className={cls.widget} sx={{ mb: { sm: "30px", xs: "10px", } }}>
                            <h4 className={cls.widgetTitle}>Popular Tags</h4>

                            <div className={cls.tagcloud}>
                                <a href="#">Bag</a>
                                <a href="#">Black</a>
                                <a href="#">Blue</a>
                                <a href="#">Clothes</a>
                                <a href="#">Fashion</a>
                                <a href="#">Hub</a>
                                <a href="#">Jean</a>
                                <a href="#">Shirt</a>
                                <a href="#">Skirt</a>
                                <a href="#">Sports</a>
                                <a href="#">Sweater</a>
                                <a href="#">Winter</a>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Container >
        </div >
    )
}

export default FooterMiddle;