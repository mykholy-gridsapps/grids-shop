import { Grid } from "@mui/material";
import React from "react";
import cls from './categoryTwelveCarousel.module.scss'

const CategoryTwelveCarousel = () => {

    return (
        <div className={cls.categoriesCarousel}>
            <h2 className={cls.sectionTitle}>Shop By Category</h2>
            <h5 className="section-info p-b-4 mb-2">Only the best seller products added recently in our catalog</h5>

            <Grid container columnSpacing={2}>
                <Grid item sm={6} md={3} order={{ md: 1, xs: 2 }}>
                    <Grid container columnSpacing={2}>
                        <Grid item xs={12}>
                            <div className={cls.productCategory}>
                                <a href="demo34-shop.html">
                                    <figure className={cls.heightmax}>
                                        <img src="imgs/category/category-8.jpg" width="273" height="273"
                                            alt="category" />
                                    </figure>
                                </a>
                                <div className={cls.categoryContent}>
                                    <ul className="sub-categories">
                                        <li><a href="demo34-shop.html">Bath &amp; Shower</a></li>
                                        <li><a href="demo34-shop.html">Body Care</a></li>
                                        <li><a href="demo34-shop.html">Body Sculpting</a></li>
                                        <li><a href="demo34-shop.html">Foot Care</a></li>
                                        <li><a href="demo34-shop.html">Handcare</a></li>
                                    </ul>

                                    <h3><a href="demo34-shop.html">Body</a></h3>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={cls.productCategory}>
                                <a href="demo34-shop.html">
                                    <figure className={cls.heightmin}>
                                        <img src="imgs/category/category-11.jpg" width="273" height="273"
                                            alt="category" />
                                    </figure>
                                </a>
                                <div className={cls.categoryContent}>
                                    <ul className="sub-categories">
                                        <li><a href="demo34-shop.html">Complexion</a></li>
                                        <li><a href="demo34-shop.html">Eyes</a></li>
                                        <li><a href="demo34-shop.html">Lips</a></li>
                                    </ul>

                                    <h3><a href="demo34-shop.html">Makeup</a></h3>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={12} md={6} order={{ md: 2, xs: 1 }}>
                    <div className={cls.productCategory}>
                        <a href="demo34-shop.html">
                            <figure>
                                <img src="imgs/category/category-9.jpg" width="273" height="273"
                                    alt="category" />
                            </figure>
                        </a>
                        <div className={cls.categoryContent}>
                            <ul className="sub-categories">
                                <li><a href="demo34-shop.html">Cleansers</a></li>
                                <li><a href="demo34-shop.html">Exfoliators</a></li>
                                <li><a href="demo34-shop.html">Eye Care</a></li>
                                <li><a href="demo34-shop.html">Face Masks</a></li>
                                <li><a href="demo34-shop.html">Lip Care</a></li>
                                <li><a href="demo34-shop.html">Serums</a></li>
                                <li><a href="demo34-shop.html">Toners</a></li>
                            </ul>

                            <h3><a href="demo34-shop.html">Skincare</a></h3>
                        </div>
                    </div>
                </Grid>
                <Grid item sm={6} md={3} order={{ md: 3, xs: 3 }}>
                    <div className="row">
                        <Grid item xs={12}>
                            <div className={cls.productCategory}>
                                <a href="demo34-shop.html">
                                    <figure className={cls.heightmin}>
                                        <img src="imgs/category/category-10.jpg" width="273" height="273"
                                            alt="category" />
                                    </figure>
                                </a>
                                <div className={cls.categoryContent}>
                                    <ul className="sub-categories">
                                        <li><a href="demo34-shop.html">Body &amp; Hair Mist</a></li>
                                        <li><a href="demo34-shop.html">Fragrance</a></li>
                                        <li><a href="demo34-shop.html">Perfume</a></li>
                                        <li><a href="demo34-shop.html">Soap</a></li>
                                    </ul>

                                    <h3><a href="demo34-shop.html">Fragrance</a></h3>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={cls.productCategory}>
                                <a href="demo34-shop.html">
                                    <figure className={cls.heightmax}>
                                        <img src="imgs/category/category-12.jpg" width="273" height="273"
                                            alt="category" />
                                    </figure>
                                </a>
                                <div className={cls.categoryContent}>
                                    <ul className="sub-categories">
                                        <li><a href="demo34-shop.html">Conditioner</a></li>
                                        <li><a href="demo34-shop.html">Shampoo</a></li>
                                        <li><a href="demo34-shop.html">Styling</a></li>
                                        <li><a href="demo34-shop.html">Treatments</a></li>
                                    </ul>

                                    <h3><a href="demo34-shop.html">Hair</a></h3>
                                </div>
                            </div>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div >
    )
}

export default CategoryTwelveCarousel;