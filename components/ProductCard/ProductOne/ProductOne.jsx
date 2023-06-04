import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { globalActions } from '../../../store/globalSlice/global-slice';
import { Rating } from '@mui/material';
import { i18n, useTranslation } from 'next-i18next'
import Link from 'next/link';
import React from 'react'

import cls from './productOne.module.scss'

const ProductOne = ({color}) => {
    const { t, i18n } = useTranslation('common');
    const dispatch = useDispatch();

    const open = () => {
        dispatch(globalActions.openQuickView());
    }

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
                <button href="ajax/product-quick-view.html" className={cls.btnQuickview} title="Quick View" onClick={open}>Quick View</button>
            </figure>
            <div className={cls.productDetails}>
                <div className={cls.categoryWrap}>
                    <div className={cls.categoryList}>
                        <Link href="demo1-shop.html" className={cls.productCategory} style={{color: color}}>category</Link>
                    </div>
                    <Link href="wishlist.html" title="Add to Wishlist" className={cls.btnIconWish}  style={{color: color}}>
                        <i className={cls.iconHeart}></i>
                    </Link>
                </div>
                <h3 className={cls.productTitle}> <Link href="#"  style={{color: color}}>Black Grey Headset</Link> </h3>
                <div className={cls.ratingsContainer}>
                    <Rating name="read-only" value={3} readOnly  style={{color: color}}/>
                </div>
                <div className={cls.priceBox}>
                    <span className={cls.productPrice}  style={{color: color}}>$9.00</span>
                </div>
            </div>
        </div>
    )
}

export default ProductOne