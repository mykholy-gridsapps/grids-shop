import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

import cls from './categoryTen.module.scss'

const CategoryTen = () => {
    const { t, i18n } = useTranslation('common')
    return (
        <div className={`${cls.banner} ${cls[i18n.language]}`}>
            <div className={cls.bannerBackground}>

                <div className={cls.bannerContent}>
                    <span>Shop Gifts</span>
                    <h3>For Her</h3>
                    <Link href="demo30-shop.html" className={cls.btn}>Shop Now</Link>
                </div>
            </div>
        </div>
    )
}

export default CategoryTen;