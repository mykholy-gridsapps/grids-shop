import React from "react";
import cls from "./saleFour.module.scss"

const SaleFour = () => {
    return (
        <div className={cls.banner}>
            <figure>
                <img src="./imgs/sale/sale-4-1.jpg" alt="banner" />
            </figure>
            <div className={cls.bannerLayer}>
                <h3>Handbags</h3>
                <h4>Starting at $99</h4>
                <a href="demo1-shop.html">Shop Now</a>
            </div>
        </div>
    )
}
export default SaleFour; 