import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import { i18n, useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react"; 
import cls from "./footerMiddle.module.scss"

const FooterMiddle = () => {
    const { t, i18n }= useTranslation('common');
    return (
        <div className={`${cls.footerMiddle} ${cls[i18n.language]}`}>
            <Container maxWidth="xl" className={cls.positionStatic}>
                <Grid container>
                    <Grid item lg={3} xs={12}>
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
                            <div className={cls.text}>
                                <h6>
                                    <b>
                                        Address:
                                    </b>
                                    <span>

                                        Example Street 68, Mahattan, New York, USA.
                                    </span>
                                </h6>
                                <h6>
                                    <b>
                                        Phone:
                                    </b>
                                    <span>
                                        +00 123 456 789
                                    </span>
                                </h6>
                                <h6>
                                    <b>
                                        Email:
                                    </b>
                                    <span>
                                        support@business.com
                                    </span>
                                </h6>
                            </div>
                        </div>
                    </Grid>

                    <Grid item lg={9} xs={12}>
                        <Grid container>
                            <Grid item md={3} xs={12}>
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
                            <Grid item md={3} xs={12}>
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
                            <Grid item md={3} xs={12}>
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
                            <Grid item md={3} xs={12}>
                                <div className={cls.links}>
                                    <h4>NEWSLETTER</h4>
                                    <form>
                                        <input type="email"  placeholder="Email address" required />
                                        <button className="btn btn-primary">ok</button>
                                    </form>
                                    <h4>LET’S SOCIALIZE</h4>
                                    <span className={`${cls.socialIcon} ${cls.iconFacebook}`}></span>
                                    <span className={`${cls.socialIcon} ${cls.iconTwitter}`}></span>
                                    <span className={`${cls.socialIcon} ${cls.iconLinkedin}`}></span>
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