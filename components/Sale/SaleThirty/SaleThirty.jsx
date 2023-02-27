import { Grid } from "@mui/material";
import { i18n, useTranslation } from "next-i18next";
import React from "react";

import cls from "./saleThirty.module.scss"

const SaleThirty = () => {
    const { t, i18n } = useTranslation("common")
    return (
        <div className={`${cls.banner} ${cls[i18n.language]}`}>
            <figure>
                <img src="./imgs/sale/sale-30-1.jpg" alt="banner" width="951" height="651" />
            </figure>
            <div className={cls.bannerContent}>
                <h3><strong>wooden<br /></strong>Black Chair</h3>
                <div className={cls.bannerInfo}>
                    <a href="#">go coupon</a>
                    <h3><span>$100</span>off</h3>
                    <p>starting from $199</p>
                    <a href="demo29-shop.html" className={cls.btn} >shop now <i className="fas fa-long-arrow-alt-right"></i></a>
                </div>
            </div>
        </div>
    )
}
export default SaleThirty; 