import React from "react";
import cls from './categoryFourteen.module.scss'

const CategoryFourteen = () => {
    return (
        <div className={cls.category}>
            <div className="product-category">
                <a href="demo42-shop.html">
                    <figure>
                    <img src="imgs/category/category-14.jpg" width="273" height="273"
                    alt="category" />
                    </figure>
                </a>
                <div className={cls.categoryContent}>
                    <h3 className="category-title">Auto Parts</h3>
                    <ul className="sub-categories">
                        <li><a href="#">Batteries, Starting And Charging</a></li>
                        <li><a href="#">Brakes And Traction Control</a></li>
                        <li><a href="#">Climate Control</a></li>
                        <li><a href="#">Collision And Hardware</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CategoryFourteen;