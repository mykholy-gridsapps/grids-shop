import { i18n, useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

import cls from "./saleSeventyFour.module.scss"

const SaleSeventyFour = ({ imgHeight }) => {
    const { t, i18n } = useTranslation('common')
    return (
        <div className={`${cls.banner} ${cls[i18n.language]}`}>
                <h3>Ultra Boost</h3>
                <Link href="#">Shop Now</Link>
        </div>
    )
}
export default SaleSeventyFour; 