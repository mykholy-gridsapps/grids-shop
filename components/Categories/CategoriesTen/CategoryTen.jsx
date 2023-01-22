import React from "react";
import cls from './categoryTen.module.scss'

const CategoryTen = () => {
    return (
        <div className={cls.banner}>
            <div className={cls.bannerBackground}>

                <div className={cls.bannerContent}>
                    <span>Shop Gifts</span>
                    <h3>For Her</h3>
                    <a href="demo30-shop.html" className={cls.btn}>Shop Now</a>
                </div>
            </div>
        </div>
    )
}

export default CategoryTen;