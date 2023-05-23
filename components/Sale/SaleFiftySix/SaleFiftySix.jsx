import { i18n, useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

import cls from "./saleFiftySix.module.scss"

const SaleFiftySix = ({ justifyContent }) => {
    const { t, i18n } = useTranslation('common')
    return (
        <div className={`${cls.banner} ${cls[i18n.language]}`} style={{justifyContent: justifyContent}}>
            <figure>
                <img src="./imgs/sale/sale-56-1.jpg" alt="banner"/>
            </figure>
            <div className={cls.bannerLayer}>
                <h4>Find the Boundaries</h4>
                <h2>Flash Sale</h2>
                <h3>70% Off</h3>
                <h5>Starting At <b>$<em>199</em>99</b></h5>
                <Link href="demo2-shop.html">Get Yours!</Link>
            </div>
        </div>
    )
}
export default SaleFiftySix; 