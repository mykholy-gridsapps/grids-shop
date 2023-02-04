import React from "react";
import cls from './categorySix.module.scss'

const CategorySix = () => {
    return (
        <div className={cls.productCategory}>
            <a href="demo21-shop.html">
                <div className={cls.categoryContent}>
                <i className="fa-regular fa-gift"></i>
                    <h3>Gifts</h3>
                </div>
            </a>
        </div>

    )
}

export default CategorySix;