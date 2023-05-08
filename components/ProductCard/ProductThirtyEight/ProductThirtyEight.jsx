import Link from 'next/link';

import { useTranslation } from 'next-i18next'

import cls from './productThirtyEight.module.scss';

const ProductThirtyEight = () => {
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
                <span className={cls.productPrice}>
                    <span>$120.00</span>
                </span>
            </div>


        </div >
    )
}

export default ProductThirtyEight;