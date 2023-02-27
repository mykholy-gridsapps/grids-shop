import { useState } from 'react';
import { Rating } from '@mui/material';
import QuickView from '../QuickView/QuickView';
import { i18n, useTranslation } from 'next-i18next'
import Link from 'next/link';
import React from 'react'

import cls from './productOne.module.scss'

const ProductOne = () => {
    const [openQuickView, setOpenQuickView] = useState(false);
    const { t, i18n } = useTranslation('common');
    return (
        <div className={`${cls.productDefault} ${cls.innerQuickview} ${cls.innerIcon} ${cls[i18n.language]}`}>
            <figure className={cls.imgEffect}>
                <Link href="demo1-product.html">
                    <img src="./imgs/product-1.jpg" width="205" height="205"
                        alt="product" />
                    <img src="./imgs/product-1-2.jpg" width="205" height="205"
                        alt="product" />
                </Link>
                <div className={cls.labelGroup}>
                    <div className={[cls.productLabel, cls.labelHot].join(' ')}>HOT</div>
                    <div className={[cls.productLabel, cls.labelSale].join(' ')}>-20%</div>
                </div>
                <div className={cls.btnIconGroup}>
                    <Link href="demo1-product.html" className={cls.btnIcon}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
                <button href="ajax/product-quick-view.html" className={cls.btnQuickview} title="Quick View" onClick={() => setOpenQuickView(true)}>Quick View</button>
            </figure>
            <div className={cls.productDetails}>
                <div className={cls.categoryWrap}>
                    <div className={cls.categoryList}>
                        <Link href="demo1-shop.html" className={cls.productCategory}>category</Link>
                    </div>
                    <Link href="wishlist.html" title="Add to Wishlist" className={cls.btnIconWish}>
                        <i className={cls.iconHeart}></i>
                    </Link>
                </div>
                <h3 className={cls.productTitle}> <a href="demo1-product.html">Black Grey Headset</a> </h3>
                <div className={cls.ratingsContainer}>
                <Rating name="read-only" value={3} readOnly />
                </div>
                <div className={cls.priceBox}>
                    <span className={cls.productPrice}>$9.00</span>
                </div>
            </div>
            {openQuickView && 
                <QuickView setOpenQuickView={setOpenQuickView} />
            }
        </div>
    )
}

export default ProductOne