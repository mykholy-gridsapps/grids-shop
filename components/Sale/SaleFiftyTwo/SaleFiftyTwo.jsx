import { i18n, useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

import cls from "./saleFiftyTwo.module.scss"

const SaleEight = ({imgHeight}) => {
    const { t, i18n } = useTranslation('common')
    return (
        <div className={`${cls.banner} ${cls[i18n.language]}`}>
            <figure>
                <img src="./imgs/sale/sale-7-1.jpg" alt="banner" style={{height: imgHeight}}/>
            </figure>
            <div className={cls.bannerLayer}>
                <h2>FLASH SALE</h2>
                <h3>TOP BRANDS
                    SUMMER SUNGLASSES</h3>
                <h4>STARTING AT
                    <sup>$</sup>199<sup>99</sup></h4>
                <Link href="demo2-shop.html">Get Yours!</Link>
            </div>
        </div>
    )
}
export default SaleEight; 