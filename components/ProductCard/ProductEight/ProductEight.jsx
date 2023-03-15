import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { globalActions } from '../../../store/globalSlice/global-slice';
import { i18n, useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Rating } from '@mui/material';

import cls from './productEight.module.scss'

const ProductEight = () => {
    const [openQuickView, setOpenQuickView] = useState(false);
    const { t, i18n } = useTranslation('common');
    const dispatch = useDispatch()
    
    const open = () => {
        dispatch(globalActions.openQuickView());
    }

    return (
        <div className={`${cls.productDefault} ${cls[i18n.language]}`}>
            <figure>
                <Link href="demo1-product.html">
                    <img src="./imgs/product-1.jpg" width="205" height="205"
                        alt="product" />
                    <img src="./imgs/product-1-2.jpg" width="205"
                        height="205" alt="product" />
                </Link>
                <div className={cls.btnIconGroup}>
                    <Link href="#" className={cls.btnIcon}>
                        <i className="fa-regular fa-bag-shopping"></i>
                    </Link>
                    <button className={cls.btnIcon} data-toggle="modal"
                        data-target="#addCartModal">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
                <button href="ajax/product-quick-view.html" className={cls.btnQuickview} title="Quick View" onClick={open}>Quick
                    View
                </button>
            </figure>
            <div className={cls.productDetails}>
                <div className={cls.categoryList}>
                    <Link href="demo1-shop.html" className={cls.productCategory}>category</Link>
                </div>
                <h3 className={cls.productTitle}> <a href="demo1-product.html">Black Grey Headset</a> </h3>
                <div className={cls.productRatings}>
                <Rating name="read-only" value={3} readOnly />
                </div>
                <div className={cls.priceBox}>
                    <span className={cls.oldPrice}>$59.00</span>
                    <span className={cls.productPrice}>$9.00</span>
                </div>
            </div>
        </div>
    )
}

export default ProductEight