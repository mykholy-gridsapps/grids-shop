import React from "react";
import cls from './categoryThirteen.module.scss'

const CategoryThirteen = () => {
    return (
        <div className={cls.category}>
            <a href="demo40-shop.html">
                <img src="imgs/category/category-13.jpg" width="273" height="273"
                    alt="category" />
            </a>
            <div className={cls.bannerLayer}>
                <h3>Vegetables</h3>
                <span>2 Products </span>
            </div>
        </div>
    )
}

export default CategoryThirteen;