import { i18n, useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

import cls from "./saleSeventyThree.module.scss"

const SaleSeventyThree = ({ imgHeight }) => {
    const { t, i18n } = useTranslation('common')
    return (
        <div className={`${cls.banner} ${cls[i18n.language]}`}>
            <figure>
                <img src="./imgs/sale/sale-72-1.jpg" alt="banner" style={{ height: imgHeight }} />
            </figure>
            <div className={cls.bannerLayer}>
                <h3>Ultra Boost</h3>
                <img src="./imgs/sale/sale-72-2.png"/>
                <Link href="#">Shop Now</Link>
            </div>
        </div>
    )
}
export default SaleSeventyThree; 