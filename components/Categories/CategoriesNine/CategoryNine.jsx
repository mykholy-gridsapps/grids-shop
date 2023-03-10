import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

import cls from './categoryNine.module.scss'

const CategoryNine = () => {
    const { t, i18n } = useTranslation('common');
    return (
        <div className={cls.productCategory}>
            <Link href="demo25-shop.html">
                <span>
                    <img src="imgs/category/category-5.jpg" alt="slider" width="545" height="398" />
                    <div className={cls.homeSlideContent}>
                        <h3 className="ls-n-10 text-white mb-0">Literature &amp; Fiction</h3>
                        <span className={cls.productCount}>4 Products</span>
                        <span className={`${cls.btn} ${cls[i18n.language]}`}>View All Products <i className="fas fa-long-arrow-alt-right"></i></span>
                    </div>
                </span>
            </Link>

            <div className={cls.productDefault}>
                <figure>
                    <img src="imgs/product-3.jpg" alt="product" width="250" height="375" />
                </figure>
                <div className={cls.productDetails}>
                    <h3><Link href="demo25-product.html">Ask Again Yes</Link></h3>
                    <div className={cls.ratingsContainer}>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <div className={cls.priceBox}>
                        <span className={cls.oldPrice}>$299.0</span>
                        <span className={cls.productPrice}>$259.0</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryNine;