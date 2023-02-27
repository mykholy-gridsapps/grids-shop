import { i18n, useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

import cls from "./saleSix.module.scss"

const SaleSix = () => {
    const { t, i18n } = useTranslation("common");
    return (
        <div className={`${cls.banner} ${cls[i18n.language]}`}>
            <figure>
                <img src="./imgs/sale/sale-6-1.jpg" alt="banner" />
            </figure>

            <div className={cls.bannerLayer}>
                <h3>Electronic<br />Deals</h3>

                <div className={cls.couponSaleContent}>
                    <h4>
                        Exclusive COUPON
                    </h4>
                    <h5><i className="ls-0">UP TO</i><b>$100</b> OFF</h5>
                    <Link href="demo2-shop.html">Get Yours!</Link>
                </div>
            </div>
        </div>
    )
}
export default SaleSix; 