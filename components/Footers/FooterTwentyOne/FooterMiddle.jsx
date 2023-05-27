import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";

import { useTranslation } from "next-i18next";

import cls from "./footerMiddle.module.scss"

const FooterMiddle = () => {
    const { i18n } = useTranslation("common");

    return (
        <div className={cls.footerMiddle}>
            <div className={cls.features}>
                <Container maxWidth="xxl">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} lg={3} className={`${cls.featureWrapper} ${cls[i18n.language]}`}>
                            <div className={cls.feature}>
                                <i className="fa-light fa-truck"></i>
                                <div>
                                    <h6>Free Shipping</h6>
                                    <p>No one rejects, dislikes.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3} className={`${cls.featureWrapper} ${cls[i18n.language]}`}>
                            <div className={cls.feature}>
                                <i className="fa-light fa-truck"></i>
                                <div>
                                    <h6>Free Shipping</h6>
                                    <p>No one rejects, dislikes.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3} className={`${cls.featureWrapper} ${cls[i18n.language]}`}>
                            <div className={cls.feature}>
                                <i className="fa-light fa-truck"></i>
                                <div>
                                    <h6>Free Shipping</h6>
                                    <p>No one rejects, dislikes.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3} className={`${cls.featureWrapper} ${cls[i18n.language]}`}>
                            <div className={cls.feature}>
                                <i className="fa-light fa-truck"></i>
                                <div>
                                    <h6>Free Shipping</h6>
                                    <p>No one rejects, dislikes.</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Container maxWidth="xxl">
                <Grid container>
                    <Grid item lg={9}>
                        <Grid container>
                            <Grid item sm={4}>
                                <div className={cls.widget}>
                                    <a href="demo1.html">
                                        <img src="./imgs/logos/coloredSmallLogo.png" alt="Logo" className={cls.logoFooter} />
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
                                    </p>
                                    <div className={cls.location}>
                                        <p><i className="fa-regular fa-location-dot"></i> 451 Wall Street, UK, London</p>
                                        <p><i className="fa-regular fa-location-dot"></i> 451 Wall Street, UK, London</p>
                                        <p><i className="fa-regular fa-location-dot"></i> 451 Wall Street, UK, London</p>
                                    </div>
                                    <div className={cls.social}>
                                        <i className="fa-brands fa-facebook-f"></i>
                                        <i className="fa-brands fa-twitter"></i>
                                        <i className="fa-brands fa-instagram"></i>
                                        <i className="fa-brands fa-linkedin-in"></i>
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
                                        <li><a href="#">Powerful Admin Panel</a></li>
                                        <li><a href="#">Mobile & Retina Optimized</a></li>
                                    </ul>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={3}>
                        <Box component='div' className={cls.widget}>
                            <div className={cls.widget}>
                                <h4 className={[cls.widgetTitle, cls.fontWeightBold].join(' ')}>Customer Service</h4>
                                <ul className={cls.links}>
                                    <li><a href="demo8-about.html">About Us</a></li>
                                    <li><a href="demo8-contact.html">Contact Us</a></li>
                                    <li><a href="dashboard.html">My Account</a></li>
                                    <li><a href="#">Orders history</a></li>
                                    <li><a href="#">Advanced search</a></li>
                                    <li><a href="#">Orders history</a></li>
                                    <li><a href="#">Advanced search</a></li>
                                </ul>
                            </div>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </div >
    )
}

export default FooterMiddle;