import { i18n, useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

import cls from "./saleSixtyThree.module.scss"

const SaleSixtyThree = ({ imgHeight }) => {
    const { t, i18n } = useTranslation('common')
    return (
        <div className={`${cls.banner} ${cls[i18n.language]}`}>
            <img src="./imgs/slider/slider-1-1.png" alt="client" />

            <div className={cls.bannerLayer} >
                <h4>Find the Boundaries. Push Through!</h4>
                <h2>Summer Sale</h2>
                <h3>70% Off</h3>
                <h5>
                    Starting At
                    <b>
                        $
                        <em>199</em>
                        99
                    </b>
                </h5>
                <Link href="demo1-shop.html" className={cls.btn}>Shop Now!</Link>
            </div>
        </div>
    )
}
export default SaleSixtyThree; 