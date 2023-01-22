import React from "react";
import cls from './categoryEight.module.scss'

const CategoryEight = () => {
    return (
        <div class={cls.productCategory}>
            <a href="demo23-shop.html">
                <figure>
                <img src="imgs/category/category-4.jpg" width="273" height="273"
                        alt="category" />
                </figure>

                <div className={cls.categoryContent}>
                    <h3>Boys</h3>
                </div>
            </a>
        </div>

    )
}

export default CategoryEight;