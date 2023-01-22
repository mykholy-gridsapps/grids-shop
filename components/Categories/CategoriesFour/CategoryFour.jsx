import React from "react";
import cls from './categoryFour.module.scss'

const CategoryFour = () => {
    return (
        <div className={cls.productCategory}>
            <a href="demo11-shop.html">
                <figure>
                    <img src="imgs/category/category-3.jpg" width="273" height="273"
                        alt="category" />
                </figure>
                <div className={cls.categoryContent}>
                    <h3>Bags</h3>
                </div>
            </a>
        </div>
    )
}

export default CategoryFour;