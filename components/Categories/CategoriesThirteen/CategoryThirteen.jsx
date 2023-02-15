import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import cls from './categoryThirteen.module.scss'

const CategoryThirteen = () => {
    const { t, i18n } = useTranslation('common')
    return (
        <div className={`${cls.category} ${cls[i18n.language]}`}>
            <Link href="demo40-shop.html">
                <img src="imgs/category/category-13.jpg" width="273" height="273"
                    alt="category" />
            </Link>
            <div className={cls.bannerLayer}>
                <h3>Vegetables</h3>
                <span>2 Products </span>
            </div>
        </div>
    )
}

export default CategoryThirteen;