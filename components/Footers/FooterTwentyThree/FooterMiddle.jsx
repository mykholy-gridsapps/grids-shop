import { Grid, Rating } from "@mui/material";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import React from "react";
import cls from "./footerMiddle.module.scss"

const FooterMiddle = () => {
    return (
        <div className={cls.footerMiddle}>
            <Grid container spacing={0}>
                <Grid item lg={5} xs={12}>
                    <div className={cls.widget}>
                        <h4 className={cls.widgetTitle}>About Us</h4>
                        <a href="demo1.html" className={cls.logo}>
                            <img src="./imgs/logos/trippleshop-blacklogo100-horizontal.png" alt="Logo" className={cls.logoFooter} />
                        </a>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et
                            dapibus lacus. Duis nec vestibulum magna, et dapibus lacus.
                            <a href="#" className={cls.readMore}>read more...</a>
                        </p>
                    </div>
                    <div className={cls.widget}>
                        <h4 className={cls.widgetTitle}>Contact Info</h4>
                        <ul className={cls.contactInfo}>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <li>
                                        <span className={cls.contactInfoLabel}>Address:</span>123 Street Name, City, England
                                    </li>
                                    <li>
                                        <span className={cls.contactInfoLabel}>Phone:</span><a href="tel:">(123) 456-7890</a>
                                    </li>
                                </Grid>
                                <Grid item xs={6}>
                                    <li>
                                        <span className={cls.contactInfoLabel}>Email:</span> <a href="mailto:mail@example.com">mail@example.com</a>
                                    </li>
                                    <li>
                                        <span className={cls.contactInfoLabel}>Working Days/Hours:</span> Mon - Sun / 9:00 AM - 8:00 PM
                                    </li>
                                </Grid>
                            </Grid>
                        </ul>
                        <div>
                            <a href="#" className={`${cls.socialIcon} ${cls.iconFacebook}`} target="_blank" title="Facebook"></a>
                            <a href="#" className={`${cls.socialIcon} ${cls.iconTwitter}`} target="_blank" title="Twitter"></a>
                            <a href="#" className={`${cls.socialIcon} ${cls.iconLinkedin} 'fab fa-linkedin-in'`} target="_blank" title="Linkedin"></a>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={3} sm={6}>
                    <div className={cls.widget}>
                        <h4 className={cls.widgetTitle}>Customer Service</h4>
                        <div className={cls.product}>
                            <figure>
                                <Link href="#" title="Black Woman Underwear">
                                    <img src="./imgs/products/product-11-1.jpg" alt="product" width="84" height="84" />
                                </Link>
                            </figure>
                            <div className={cls.details}>
                                <h3>
                                    <Link href="#">
                                        Black Woman Underwear
                                    </Link>
                                </h3>
                                <Rating value={3.7} readOnly />
                                <div className={cls.price}>
                                    <span>$39.00</span>
                                </div>
                            </div>
                        </div>
                        <div className={cls.product}>
                            <figure>
                                <Link href="#" title="Black Woman Underwear">
                                    <img src="./imgs/products/product-11-1.jpg" alt="product" width="84" height="84" />
                                </Link>
                            </figure>
                            <div className={cls.details}>
                                <h3>
                                    <Link href="#">
                                        Black Woman Underwear
                                    </Link>
                                </h3>
                                <Rating value={3.7} readOnly />
                                <div className={cls.price}>
                                    <span>$39.00</span>
                                </div>
                            </div>
                        </div>
                        <div className={cls.product}>
                            <figure>
                                <Link href="#" title="Black Woman Underwear">
                                    <img src="./imgs/products/product-11-1.jpg" alt="product" width="84" height="84" />
                                </Link>
                            </figure>
                            <div className={cls.details}>
                                <h3>
                                    <Link href="#">
                                        Black Woman Underwear
                                    </Link>
                                </h3>
                                <Rating value={3.7} readOnly />
                                <div className={cls.price}>
                                    <span>$39.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={4} sm={6}>
                    <div className={cls.widget}>
                        <h4 className={cls.widgetTitle}>Twitter Feed</h4>
                        <div className={cls.twitterFeed}>
                            <Link className={cls.icon} href="#">
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <p>
                                Oops, our twitter feed is unavailable right now.
                                <br />
                                <Link href="#">Follow us on Twitter</Link>
                            </p>

                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={0} className={cls.links}>
                <Grid item lg={6} xs={12}>
                    <div className={cls.widget}>
                        <h4 className={cls.widgetTitle}>Customer Service</h4>
                        <Grid container >
                            <Grid item xs={6}>
                                <ul>
                                    <li>
                                        <Link href="#">About us</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Contact us</Link>
                                    </li>
                                    <li>
                                        <Link href="#">My Account</Link>
                                    </li>
                                </ul>
                            </Grid>
                            <Grid item xs={6}>
                                <ul>
                                    <li>
                                        <Link href="#">Order history</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Advanced search</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Login</Link>
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>

                    </div>
                </Grid>
                <Grid item lg={6} xs={12}>
                    <div className={cls.widget}>
                        <h4 className={cls.widgetTitle}>Customer Service</h4>
                        <Grid container >
                            <Grid item xs={6}>
                                <ul>
                                    <li>
                                        <Link href="#">About us</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Contact us</Link>
                                    </li>
                                    <li>
                                        <Link href="#">My Account</Link>
                                    </li>
                                </ul>
                            </Grid>
                            <Grid item xs={6}>
                                <ul>
                                    <li>
                                        <Link href="#">Order history</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Advanced search</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Login</Link>
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>

                    </div>
                </Grid>
                
            </Grid>
        </div >
    )
}

export default FooterMiddle;