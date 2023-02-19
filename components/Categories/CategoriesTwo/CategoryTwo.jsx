import React from "react";
import cls from './categoryTwo.module.scss'

const CategoryTwo = () => {
    return (
        <div className={cls.productCategory}>
            <a href="demo3-shop.html">
                <figure>
                    <img src="imgs/category/category-1.jpg" width="273" height="273"
                        alt="category" />
                </figure>
                <div className={cls.categoryContent}>
                    <h3>Sunglasses</h3>
                    <span><mark className="count">8</mark> products</span>
                </div>
            </a>
        </div>
    )
}

export default CategoryTwo;