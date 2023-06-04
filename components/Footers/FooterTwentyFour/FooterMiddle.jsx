import React from "react";

import { Grid } from "@mui/material";
import { Box } from "@mui/system";

import { useTranslation } from "next-i18next";

import cls from "./footerMiddle.module.scss"

const FooterMiddle = () => {
    const { i18n } = useTranslation('common');

    return (
        <div className={cls.footerMiddle}>
            <div className={cls.positionStatic}>
                <Grid container>
                    <Grid item lg={9}>
                        <Grid container>
                            <Grid item sm={4}>
                                <div className={cls.widget}>
                                    <h4 className={[cls.widgetTitle, cls.fontWeightBold].join(' ')}>CONTACT US</h4>
                                    <p><span>Address:</span> 502 New Design Str, Melbourne, San Francisco, CA 94110, United States</p>
                                    <p><span>Phone:</span> (+01) 123-456-789</p>
                                    <p><span>E-mail:</span> contact@ecom-market.com</p>
                                    <p><span>Hours:</span> 8:00 - 17:00, Mon - Sat</p>
                                    <div className={cls.social}>
                                        <i className="fa-brands fa-facebook-f"></i>
                                        <i className="fa-brands fa-twitter"></i>
                                        <i className="fa-brands fa-instagram"></i>
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item sm={4}>
                                <div className={`${cls.widget} ${cls[i18n.language]}`}>
                                    <h4 className={[cls.widgetTitle, cls.fontWeightBold].join(' ')}>Customer Service</h4>
                                    <ul className={cls.links}>
                                        <li><a href="demo8-about.html"><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> About Us</a></li>
                                        <li><a href="demo8-contact.html"><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Contact Us</a></li>
                                        <li><a href="dashboard.html"><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> My Account</a></li>
                                        <li><a href="#"><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Orders history</a></li>
                                        <li><a href="#"><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Advanced search</a></li>
                                        <li><a href="#"><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Orders history</a></li>
                                        <li><a href="#"><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Advanced search</a></li>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item sm={4}>
                                <div className={`${cls.widget} ${cls[i18n.language]}`}>
                                    <h4 className={[cls.widgetTitle, cls.fontWeightBold].join(' ')}>ABOUT US</h4>
                                    <ul className={cls.links}>
                                        <li><a href="demo8-about.html"><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Super Fast HTML Template</a></li>
                                        <li><a href="demo8-contact.html"><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Top Rated Theme in Themeforest</a></li>
                                        <li><a href="my-account.html"><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> 33 Unique Shop Demos</a></li>
                                        <li><a href="#"><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Powerful Admin Panel</a></li>
                                        <li><a href="#"><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Mobile & Retina Optimized</a></li>
                                        <li><a href="#"><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Powerful Admin Panel</a></li>
                                        <li><a href="#"><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Mobile & Retina Optimized</a></li>
                                    </ul>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={3}>
                        <Box component='div' className={`${cls.widget} ${cls.widgetNewsletter}`}>
                            <h4 className={cls.widgetTitle}>Download App on Mobile:</h4>
                            <p>15% discount on your first purchase</p>
                            <div className={cls.btns}>
                                <img src="/imgs/google-play.svg" alt="button" />
                                <img src="/imgs/app-store.svg" alt="button" />
                            </div>
                        </Box>
                    </Grid>

                    <Grid item xl={12}>
                        <div className={cls.bottomSection}>

                            <div className={cls.logo}>
                                <img src="/imgs/logos/coloredSmallLogo.png" alt="logo" />
                            </div>

                            <ul>
                                <li>
                                    EcomMarket.comEcom
                                </li>
                                <li>
                                    PartnersEcom
                                </li>
                                <li>
                                    BussinessEcom
                                </li>
                                <li>
                                    Factory
                                </li>
                            </ul>

                        </div>
                    </Grid>

                </Grid>
            </div >
        </div >
    )
}

export default FooterMiddle;