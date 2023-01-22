import React from "react";
import cls from './categoryOne.module.scss'

const CategoryOne = () => {
    return (
        <div className={cls.productCategory}>
            <a href="demo3-shop.html">
                <figure>
                    <img src="imgs/category/category-1.jpg" width="273" height="273"
                        alt="category" />
                </figure>
                <div className={cls.categoryContent}>
                    <h3>Sunglasses</h3>
                    <span><mark class="count">8</mark> products</span>
                </div>
            </a>
        </div>
    )
}

export default CategoryOne;