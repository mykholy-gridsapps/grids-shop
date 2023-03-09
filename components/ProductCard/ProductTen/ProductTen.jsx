import React from 'react'
import { i18n, useTranslation } from 'next-i18next'
import Link from 'next/link';
import { Rating } from '@mui/material';

import cls from './productTen.module.scss'

const ProductTen = () => {
    const { t, i18n } = useTranslation('common');

    return (
        <div className={`${cls.productDefault} ${cls[i18n.language]}`}>
            <div className={cls.thumbWrapper}>
                <Link href="#" className={cls.thumblink}>
                    <figure>
                        <img src='./imgs/product-9.jpg' />
                    </figure>
                </Link>
                <div className={cls.groupButton}>

                    <div className={cls.search}>
                        <Link href="#">
                            <i class="fa-regular fa-magnifying-glass"></i>
                        </Link>
                    </div>
                    <div className={cls.addToWishlist}>
                        <Link href="#">
                            <i class="fa-regular fa-heart"></i>
                        </Link>
                    </div>
                    <div className={cls.compare}>
                        <Link href="#">
                            <i class="fa-regular fa-rotate"></i>
                        </Link>
                    </div>
                    <div className={cls.addToCart}>
                        <Link href="#">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={cls.productInfo}>
                <h2>
                    <Link href="#">Daily Women’s Dress</Link>
                </h2>
                <div className={cls.rating}>
                    <Rating name="read-only" value={3} readOnly />
                </div>
                <span className={cls.price}>
                    <span>$</span>230.00
                </span>
            </div>
        </div >
    )
}

export default ProductTen