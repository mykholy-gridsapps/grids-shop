import { Grid } from "@mui/material";
import { Container } from "@mui/system";

import { useTranslation } from "next-i18next";

import cls from "./footerMiddle.module.scss"

const FooterMiddle = () => {
    const { i18n } = useTranslation('common');

    return (
        <div className={cls.footerMiddle}>
            <div className={cls.features}>
                <Container maxWidth="xxxl">
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
            <Container maxWidth="xl" className={cls.positionStatic}>
                <Grid container>
                    <Grid item xs={12} sm={6} lg={3}>
                        <div className={cls.widget}>
                            <a href="demo1.html">
                                <img src="./imgs/logos/coloredLogo.png" alt="Logo" className={cls.logoFooter} />
                            </a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et
                                dapibus lacus. Duis nec vestibulum magna, et dapibus lacus.
                            </p>
                            <div className={cls.location}>
                                <p><i className="fa-regular fa-location-dot"></i> 451 Wall Street, UK, London</p>
                                <p><i className="fa-regular fa-location-dot"></i> 451 Wall Street, UK, London</p>
                                <p><i className="fa-regular fa-location-dot"></i> 451 Wall Street, UK, London</p>
                            </div>
                        </div>
                    </Grid>

                    <Grid item lg={3} sm={6}>
                        <div className={cls.widget}>
                            <h4 className={cls.widgetTitle}>Recent Posts</h4>
                            <div className={cls.post}>
                                <img src="/imgs/bg.jpg" alt="post image" loading="lazy" />
                                <div className={cls.details}>
                                    <h6>A companion for extra sleeping</h6>
                                    <span>July 23, 2016 1 Comment</span>
                                </div>
                            </div>
                            <div className={cls.post}>
                                <img src="/imgs/bg.jpg" alt="post image" loading="lazy" />
                                <div className={cls.details}>
                                    <h6>A companion for extra sleeping</h6>
                                    <span>July 23, 2016 1 Comment</span>
                                </div>
                            </div>
                            <div className={cls.post}>
                                <img src="/imgs/bg.jpg" alt="post image" loading="lazy" />
                                <div className={cls.details}>
                                    <h6>A companion for extra sleeping</h6>
                                    <span>July 23, 2016 1 Comment</span>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item XS={12} sm={4} lg={2}>
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
                                <li><a href="#">Advanced Search</a></li>
                                <li><a href="dashboard.html">My Account</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item XS={12} sm={4} lg={2}>
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
                                <li><a href="#">Advanced Search</a></li>
                                <li><a href="dashboard.html">My Account</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item XS={12} sm={4} lg={2}>
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
                                <li><a href="#">Advanced Search</a></li>
                                <li><a href="dashboard.html">My Account</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
            </Container >
        </div >
    )
}

export default FooterMiddle;