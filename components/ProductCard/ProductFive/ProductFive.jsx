/* eslint-disable @next/next/no-img-element */
import { Rating } from '@mui/material';
import { i18n, useTranslation } from 'next-i18next'
import Link from 'next/link';
import React from 'react'

import cls from './productFive.module.scss'

const ProductFive = () => {
    const { t, i18n } = useTranslation('common');
    return (
        <div className={`${cls.productDefault} ${cls[i18n.language]}`}>
            <figure>
                <Link href="demo1-product.html">
                    <img src="./imgs/product-1.jpg" width="205" height="205"
                        alt="product" />
                    <img src="./imgs/product-1-2.jpg" width="205"
                        height="205" alt="product" />
                </Link>
                <div className={cls.labelGroup}>
                    <div className={[cls.productLabel, cls.labelHot].join(' ')}>HOT</div>
                    <div className={[cls.productLabel, cls.labelSale].join(' ')}>-20%</div>
                </div>
            </figure>
            <div className={cls.productDetails}>
                <div className={cls.categoryList}>
                    <Link href="category.html">Category</Link>
                </div>
                <h3 className={cls.productTitle}>
                    <Link href="product.html">Men Black Gentle Belt</Link>
                </h3>
                <div className={cls.ratingsContainer}>
                <Rating name="read-only" value={3} readOnly />
                </div>
                <div className={cls.priceBox}>
                    <span className={cls.oldPrice}>$59.00</span>
                    <span className={cls.productPrice}>$9.00</span>
                </div>
                <div className={cls.productAction}>
                    <Link href="wishlist.html" className={cls.btnIconWish} title="wishlist"><i className={cls.iconHeart}></i></Link>
                    <Link href="#" className={cls.btnAddCart}><i
                        className="icon-shopping-cart"></i><span>ADD TO CART</span></Link>
                    <Link href="ajax/product-quick-view.html" className={cls.btnQuickview} title="Quick View">
                        <i className="fas fa-external-link-alt"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default ProductFive