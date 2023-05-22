import { i18n, useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

import cls from "./saleFiftyFive.module.scss"

const SaleEight = ({ justifyContent }) => {
    const { t, i18n } = useTranslation('common')
    return (
        <div className={`${cls.banner} ${cls[i18n.language]}`} style={{justifyContent: justifyContent}}>
            <figure>
                <img src="./imgs/sale/sale-55-1.jpg" alt="banner"/>
            </figure>
            <div className={cls.bannerLayer}>
                <h2>
                    WOMEN'S
                    <br />
                    COLLECTION
                </h2>
                <p>Check out this week's hottest styles.</p>
                <Link href="demo2-shop.html">Get Yours!</Link>
            </div>
        </div>
    )
}
export default SaleEight; 