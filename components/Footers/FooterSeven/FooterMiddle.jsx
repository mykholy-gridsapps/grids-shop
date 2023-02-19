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
                            <h4 className={cls.widgetTitle}>About Us</h4>
                            <a href="demo1.html">
                                <img src="./imgs/logos/logo-footer.png" alt="Logo" className={cls.logoFooter} />
                            </a>
                            <Box component='p' sx={{ mb: "24px", mt: "0" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et
                                dapibus lacus. Duis nec vestibulum magna, et dapibus lacus.</Box>
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
                                <li><a href="#">Advanced Search</a></li>
                                <li><a href="dashboard.html">My Account</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="#">Corporate Sales</a></li>
                                <li><a href="#">Privacy</a></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item lg={3} sm={6} sx={{ pb: '0' }}>
                        <Box component='div' className={[cls.widget, cls.widgetPost].join(' ')} sx={{ mb: { sm: "30px", xs: "10px", } }}>
                            <h4 className={cls.widgetTitle}>Latest News</h4>
                            <ul className="links">
                                <li><a href="#">Top Jeans Collection<br /><span className="font1">JULY 23,
                                    2021</span></a></li>
                                <li><a href="#">Post Format Standard<br /><span className="font1">FEBRUARY 26,
                                    2020</span></a></li>
                                <li><a href="#">Post Format Video<br /><span className="font1">FEBRUARY 26,
                                    2019</span></a></li>
                            </ul>
                        </Box>
                    </Grid>

                    <Grid item lg={3} sm={6}>
                        <Box component='div' className={[cls.widget, cls.widgetNewsletter].join(' ')}>
                            <h4 className={cls.widgetTitle} >Subscribe newsletter</h4>
                            <Grid container alignItems="center" sx={{ pt: '9px !important' }}>
                                <p>Get all the latest information on Events, Sales and Offers. Sign up for
                                    newsletter today.</p>
                                <form>
                                    <input type="email" className={cls.formControl} placeholder="Email Address" required />

                                    <input type="submit" className={cls.btn} value="Subscribe" />
                                </form>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container >
        </div >
    )
}

export default FooterMiddle;