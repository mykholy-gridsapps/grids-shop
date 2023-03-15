
import React from 'react'
import { i18n, useTranslation } from 'next-i18next'
import Link from 'next/link';

import cls from './productFifteen.module.scss'

const ProductFifteen = () => {
    const { t, i18n } = useTranslation('common');
    return (
        <div className={`${cls.productDefault} ${cls[i18n.langåuage]}`}>

            <div className={cls.productImage}>
                <Link href="#">
                    <img src="./imgs/products/product-11-1.jpg" />
                </Link>
            </div>
            <div className={cls.productDetails}>
                <Link href="#">
                    <span className={cls.productTitle}>Hooded Henley Tshirts Lorem Ipsum</span>
                </Link>


                <span className={cls.productPrice}>
                    <span><span>$</span>120.00</span>
                </span>
            </div>


        </div >
    )
}

export default ProductFifteen