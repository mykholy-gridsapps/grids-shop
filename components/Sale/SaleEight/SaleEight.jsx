import { i18n, useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

import cls from "./saleEight.module.scss"

const SaleEight = () => {
    const { t, i18n } = useTranslation('common')
    return (
        <div className={`${cls.banner} ${cls[i18n.language]}`}>
            <figure>
                <img src="./imgs/sale/sale-8-1.jpg" alt="banner" />
            </figure>
            <div className={cls.bannerLayer}>
                <h3>Exclusive Shoes</h3>
                <h4>50% Off</h4>
                <Link href="demo2-shop.html">Get Yours!</Link>
            </div>
        </div>
    )
}
export default SaleEight; 