import React from 'react'
import Link from 'next/link';

import CountDown from '../../UIs/CountDown/CountDown';

import { i18n, useTranslation } from 'next-i18next'
import { Rating } from '@mui/material';

import cls from './productSixteen.module.scss'

const ProductEleven = () => {
    const { t, i18n } = useTranslation('common');
    return (
        <div className={`${cls.productDefault} ${cls[i18n.language]}`}>
            <div className={cls.productImage}>
                <Link href="#">
                    <img src="./imgs/products/product-11-1.jpg" className={cls.frontImage} alt="" />
                    <img src="./imgs/products/product-11-2.jpg" className={cls.backImage} alt="" />
                </Link>
                <div className={cls.countDown}>
                    <CountDown daysCount={0.8} headColor={'var(--main-color)'} />
                </div>
                {/* <div className={cls.productButtons}>
                    <div className={cls.quickviewButton}>
                        <Link href="#"><i className="fa-solid fa-eye"></i> Quick View</Link>
                    </div>
                </div> */}
            </div>

            <div className={cls.productContent}>

                <div className={cls.productTitleRating}>
                    <Link className={cls.productTitle} href="#">
                        <h3>Hooded
                            Sweatshirt
                            Lorem
                            Ipsum
                        </h3>
                    </Link>
                    <div className={cls.productRating}>
                        <Rating name="read-only" value={3} readOnly />
                        <span className={cls.productRatingCount}>(2)</span>
                    </div>
                </div>
                <div className={cls.productPrice}>
                    <del><span><bdi><span>$</span>200.00</bdi></span></del>
                    <ins><span><bdi><span>$</span>175.00</bdi></span></ins>
                </div>
                <div className={cls.productButtons}>
                    <div className={cls.productCart}>
                        <Link href="#">
                            Add to cart
                        </Link>
                    </div>

                    <div className={cls.addButton}>
                        <Link href="#">
                            <i className="fa-regular fa-heart"></i>
                        </Link>
                    </div>
                    <div className={cls.compareButton}>
                        <Link href="#">
                            <i className="fa-solid fa-rotate"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductEleven