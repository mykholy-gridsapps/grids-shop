import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";
import cls from "./footerMiddle.module.scss"

const FooterMiddle = () => {
    const { t, i18n } = useTranslation('common');

    return (
        <div className={`${cls.footerMiddle} ${cls[i18n.language]}`}>
            <Container maxWidth="xl" className={cls.positionStatic}>
                <div className={cls.features}>
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
                </div>

                <Grid container>
                    <Grid item lg={3} sm={6} xs={12}>
                        <div className={cls.links}>
                            <h4>Useful Links</h4>

                            <ul>
                                <li>
                                    <Link href='#'>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Privacy policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Contact us
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Our blogs
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Returns
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item lg={3} sm={6} xs={12}>
                        <div className={cls.links}>
                            <h4>Useful Links</h4>

                            <ul>
                                <li>
                                    <Link href='#'>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Privacy policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Contact us
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Our blogs
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Returns
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item lg={3} sm={6} xs={12}>
                        <div className={cls.links}>
                            <h4>Useful Links</h4>

                            <ul>
                                <li>
                                    <Link href='#'>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Privacy policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Contact us
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Our blogs
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        Returns
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item lg={3} sm={6} xs={12}>
                        <div className={cls.links}>
                            <h4>AVAILABLE ON:</h4>
                            <div className={cls.images}>
                                <img src="/imgs/google-play.svg" alt="google" />
                                <img src="/imgs/app-store.svg" alt="google" />
                            </div>
                            <h4>NEWSLETTER</h4>
                            <p>Signup today for free and be the first to get notified on new updates.</p>
                            <form>
                                <input type="email" className={cls.formControl} placeholder="Email Address" required />

                                <input type="submit" className={cls.btn} value="Subscribe" />
                            </form>
                        </div>
                    </Grid>

                </Grid>
                <div className={cls.methods}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} lg={9}>
                            <div>
                                <p>Payment System</p>
                                <div className={cls.cards}>
                                    <img src="/imgs/payments/payment-visa.svg" alt="visa" />
                                    <img src="/imgs/payments/payment-visa.svg" alt="visa" />
                                    <img src="/imgs/payments/payment-visa.svg" alt="visa" />
                                    <img src="/imgs/payments/payment-visa.svg" alt="visa" />
                                    <img src="/imgs/payments/payment-visa.svg" alt="visa" />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <div>
                                <p>Our Social Llinks:</p>
                                <div className={cls.icons}>
                                    <i className="fa-brands fa-facebook-f"></i>
                                    <i className="fa-brands fa-twitter"></i>
                                    <i className="fa-brands fa-linkedin-in"></i>
                                    <i className="fa-brands fa-youtube"></i>
                                    <i className="fa-brands fa-instagram"></i>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container >
        </div >
    )
}

export default FooterMiddle;