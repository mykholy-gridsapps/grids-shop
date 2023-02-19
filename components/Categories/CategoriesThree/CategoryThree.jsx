import React from "react";
import cls from './categoryThree.module.scss'

const CategoryThree = () => {
    return (
        <div>
            <a href="demo7-product.html">
            <img src="imgs/category/category-2.jpg" width="273" height="273"
                        alt="category" />    
            </a>
            <div className={cls.bannerLayer}>
                <h3>DRESS</h3>
                <span>2 PRODUCTS </span>
            </div>
        </div>
    )
}

export default CategoryThree;