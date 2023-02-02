import React from "react";
import cls from "./saleEight.module.scss"

const SaleEight = () => {
    return (
        <div className={cls.banner}>
            <figure>
                <img src="./imgs/sale/sale-8-1.jpg" alt="banner" />
            </figure>
            <div className={cls.bannerLayer}>
                <h3>Exclusive Shoes</h3>
                <h4>50% Off</h4>
                <a href="demo2-shop.html">Get Yours!</a>
            </div>
        </div>
    )
}
export default SaleEight; 