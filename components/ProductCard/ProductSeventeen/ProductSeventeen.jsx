
import { useState } from 'react';
import Link from 'next/link';

import Rating from '@mui/material/Rating';

import { i18n, useTranslation } from 'next-i18next'

import cls from './productSeventeen.module.scss';

const ProductSeventeen = () => {
    const [rate, setRate] = useState(2);

    const { t, i18n } = useTranslation('common');
    return (
        <div className={`${cls.productDefault} ${cls[i18n.langåuage]}`}>

            <div className={cls.productImage}>
                <Link href="#">
                    <img src="./imgs/shoes.png" />
                </Link>
            </div>
            <div className={cls.productDetails}>
                <Link href="#">
                    <span className={cls.productTitle}>Hooded Henley Tshirts</span>
                </Link>
                <Rating name="read-only" value={rate} readOnly />
                <span className={cls.productPrice}>
                    <span>$120.00</span>
                </span>
            </div>


        </div >
    )
}

export default ProductSeventeen