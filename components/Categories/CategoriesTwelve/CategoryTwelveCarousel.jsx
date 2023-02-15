import { Grid } from "@mui/material";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import React from "react";
import cls from './categoryTwelveCarousel.module.scss'

const CategoryTwelveCarousel = () => {
    const { t, i18n } = useTranslation('common')

    return (
        <div className={`${cls.categoriesCarousel} ${cls[i18n.language]}`}>
            <h2 className={cls.sectionTitle}>Shop By Category</h2>
            <h5 className="section-info p-b-4 mb-2">Only the best seller products added recently in our catalog</h5>

            <Grid container columnSpacing={2}>
                <Grid item xs={12} lg={3} order={{ md: 1, xs: 2 }}>
                    <Grid container columnSpacing={2}>
                        <Grid item lg={12} sm={6} xs={12}>
                            <div className={cls.productCategory}>
                                <Link href="demo34-shop.html">
                                    <figure className={cls.heightmax}>
                                        <img src="imgs/category/category-8.jpg" width="273" height="273"
                                            alt="category" />
                                    </figure>
                                </Link>
                                <div className={cls.categoryContent}>
                                    <ul className="sub-categories">
                                        <li><Link href="demo34-shop.html">Bath &amp; Shower</Link></li>
                                        <li><Link href="demo34-shop.html">Body Care</Link></li>
                                        <li><Link href="demo34-shop.html">Body Sculpting</Link></li>
                                        <li><Link href="demo34-shop.html">Foot Care</Link></li>
                                        <li><Link href="demo34-shop.html">Handcare</Link></li>
                                    </ul>

                                    <h3><Link href="demo34-shop.html">Body</Link></h3>
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={12} sm={6} xs={12}>
                            <div className={cls.productCategory}>
                                <Link href="demo34-shop.html">
                                    <figure className={cls.heightmin}>
                                        <img src="imgs/category/category-11.jpg" width="273" height="273"
                                            alt="category" />
                                    </figure>
                                </Link>
                                <div className={cls.categoryContent}>
                                    <ul className="sub-categories">
                                        <li><Link href="demo34-shop.html">Complexion</Link></li>
                                        <li><Link href="demo34-shop.html">Eyes</Link></li>
                                        <li><Link href="demo34-shop.html">Lips</Link></li>
                                    </ul>

                                    <h3><Link href="demo34-shop.html">Makeup</Link></h3>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={6} order={{ md: 2, xs: 1 }}>
                    <div className={cls.productCategory}>
                        <Link href="demo34-shop.html">
                            <figure>
                                <img src="imgs/category/category-9.jpg" width="273" height="273"
                                    alt="category" />
                            </figure>
                        </Link>
                        <div className={cls.categoryContent}>
                            <ul className="sub-categories">
                                <li><Link href="demo34-shop.html">Cleansers</Link></li>
                                <li><Link href="demo34-shop.html">Exfoliators</Link></li>
                                <li><Link href="demo34-shop.html">Eye Care</Link></li>
                                <li><Link href="demo34-shop.html">Face Masks</Link></li>
                                <li><Link href="demo34-shop.html">Lip Care</Link></li>
                                <li><Link href="demo34-shop.html">Serums</Link></li>
                                <li><Link href="demo34-shop.html">Toners</Link></li>
                            </ul>

                            <h3><Link href="demo34-shop.html">Skincare</Link></h3>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} lg={3} order={{ md: 3, xs: 3 }}>
                    <Grid container columnSpacing={2}>
                        <Grid item lg={12} sm={6} xs={12}>
                            <div className={cls.productCategory}>
                                <Link href="demo34-shop.html">
                                    <figure className={cls.heightmin}>
                                        <img src="imgs/category/category-10.jpg" width="273" height="273"
                                            alt="category" />
                                    </figure>
                                </Link>
                                <div className={cls.categoryContent}>
                                    <ul className="sub-categories">
                                        <li><Link href="demo34-shop.html">Body &amp; Hair Mist</Link></li>
                                        <li><Link href="demo34-shop.html">Fragrance</Link></li>
                                        <li><Link href="demo34-shop.html">Perfume</Link></li>
                                        <li><Link href="demo34-shop.html">Soap</Link></li>
                                    </ul>

                                    <h3><Link href="demo34-shop.html">Fragrance</Link></h3>
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={12} sm={6} xs={12}>
                            <div className={cls.productCategory}>
                                <Link href="demo34-shop.html">
                                    <figure className={cls.heightmax}>
                                        <img src="imgs/category/category-12.jpg" width="273" height="273"
                                            alt="category" />
                                    </figure>
                                </Link>
                                <div className={cls.categoryContent}>
                                    <ul className="sub-categories">
                                        <li><Link href="demo34-shop.html">Conditioner</Link></li>
                                        <li><Link href="demo34-shop.html">Shampoo</Link></li>
                                        <li><Link href="demo34-shop.html">Styling</Link></li>
                                        <li><Link href="demo34-shop.html">Treatments</Link></li>
                                    </ul>

                                    <h3><Link href="demo34-shop.html">Hair</Link></h3>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div >
    )
}

export default CategoryTwelveCarousel;