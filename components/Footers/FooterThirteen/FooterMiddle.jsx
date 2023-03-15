import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import { i18n, useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";
import cls from "./footerMiddle.module.scss"

const FooterMiddle = () => {
    const { t, i18n } = useTranslation('common');
    return (
        <div className={`${cls.footerMiddle} ${cls[i18n.language]}`}>
            <Container maxWidth="xl" className={cls.positionStatic}>
                <Grid container>
                    <Grid item lg={3} md={6} xs={12}>
                        <div className={cls.widget}>
                            <Link href="/">
                                <span>
                                    <img
                                        className={cls.bigImage}
                                        src="./imgs/logos/coloredLogo.png"
                                        alt="tripple-shop-logo"
                                    />
                                </span>
                            </Link>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            <div className={cls.text}>
                                <h6>
                                    <b>
                                        <i class="fa-solid fa-location-dot"></i>
                                    </b>
                                    <span>

                                        Example Street 68, Mahattan, New York, USA.
                                    </span>
                                </h6>
                                <h6>
                                    <b>
                                        <i class="fa-solid fa-phone"></i>
                                    </b>
                                    <span>
                                        +00 123 456 789
                                    </span>
                                </h6>
                                <h6>
                                    <b>
                                        <i class="fa-solid fa-envelope"></i>
                                    </b>
                                    <span>
                                        support@business.com
                                    </span>
                                </h6>
                                <h6>
                                    <b>
                                        <i class="fa-solid fa-mobile-screen-button"></i>
                                    </b>
                                    <span>
                                        Hotline: 090 999 8686
                                    </span>
                                </h6>
                            </div>
                        </div>
                    </Grid>

                    <Grid item lg={3} md={6} xs={12}>
                        <div className={cls.links}>
                            <h4>COMPANY</h4>

                            <ul>
                                <li>
                                    <Link href='#'>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12}>
                        <div className={cls.links}>
                            <h4>COMPANY</h4>

                            <ul>
                                <li>
                                    <Link href='#'>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12}>
                        <div className={cls.links}>
                            <h4>NEWSLETTER</h4>
                            <p>Signup today for free and be the first to get notified on new updates.</p> 
                            <form>
                                <input type="email" className={cls.formControl} placeholder="Email Address" required />

                                <input type="submit" className={cls.btn} value="Subscribe" />
                            </form>
                            <h4>LET’S SOCIALIZE</h4>
                            <span className={`${cls.socialIcon} ${cls.iconFacebook}`}></span>
                            <span className={`${cls.socialIcon} ${cls.iconTwitter}`}></span>
                            <span className={`${cls.socialIcon} ${cls.iconLinkedin}`}></span>
                        </div>
                    </Grid>

                </Grid>
            </Container >
        </div >
    )
}

export default FooterMiddle;