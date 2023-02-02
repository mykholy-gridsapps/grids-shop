import React from "react";
import cls from "./saleThree.module.scss"

const SaleThree = () => {
    return (
        <div className={cls.banner}>
            <figure>
                <img src="./imgs/sale/sale-3-1.jpg" alt="banner" />
            </figure>
            <div className={cls.bannerLayer}>
                <h3>Deal Promos</h3>
                <h4>Starting at $99</h4>
                <a href="demo1-shop.html">Shop Now</a>
            </div>
        </div>
    )
}
export default SaleThree; 