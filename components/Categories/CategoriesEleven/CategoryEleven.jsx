import React from "react";
import cls from './categoryEleven.module.scss'

const CategoryEleven = () => {
    return (
        <div className={cls.productCategory}>
            <a href="demo33-shop.html">
                <figure>
                    <img src="imgs/category/category-7.jpg" width="273" height="273"
                        alt="category" />

                </figure>
                <div className={cls.categoryContent}>
                    <h3>Sunglasses</h3>
                    <span>
                        <mark className="count">22</mark> products</span>
                </div>
            </a>
        </div>

    )
}

export default CategoryEleven;