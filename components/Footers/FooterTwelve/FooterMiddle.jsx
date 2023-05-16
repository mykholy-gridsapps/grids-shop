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
                    <Grid item lg={3} xs={12}>
                        <div className={cls.widget}>
                            <h4>INFOMATION</h4>
                            <div className={cls.text}>
                                <h6>
                                    <b>
                                        <i className="fa-solid fa-location-dot"></i>
                                    </b>
                                    <span>

                                        Example Street 68, Mahattan, New York, USA.
                                    </span>
                                </h6>
                                <h6>
                                    <b>
                                        <i className="fa-solid fa-phone"></i>
                                    </b>
                                    <span>
                                        +00 123 456 789
                                    </span>
                                </h6>
                                <h6>
                                    <b>
                                        <i className="fa-solid fa-envelope"></i>
                                    </b>
                                    <span>
                                        support@business.com
                                    </span>
                                </h6>
                                <h6>
                                    <b>
                                        <i className="fa-solid fa-mobile-screen-button"></i>
                                    </b>
                                    <span>
                                        Hotline: 090 999 8686
                                    </span>
                                </h6>
                            </div>
                        </div>
                    </Grid>

                    <Grid item lg={9} xs={12}>
                        <Grid container>
                            <Grid item md={4} xs={12}>
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
                            <Grid item md={4} xs={12}>
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
                            <Grid item md={4} xs={12}>
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
                        </Grid>
                    </Grid>
                </Grid>
            </Container >
        </div >
    )
}

export default FooterMiddle;