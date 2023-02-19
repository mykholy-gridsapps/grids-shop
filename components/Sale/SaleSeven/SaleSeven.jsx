import React from "react";
import cls from "./saleSeven.module.scss"

const SaleSeven = () => {
    return (
        <div className={cls.banner}>
            <figure>
                <img src="./imgs/sale/sale-7-1.jpg" alt="banner" />
            </figure>
            <div className={cls.bannerLayer}>
                <h2>Flash Sale</h2>
                <h3>Top Brands<br />Summer Sunglasses</h3>
                <h4>Starting<br />AT <sup>$</sup>199<sup>99</sup></h4>
                <a href="demo2-shop.html">View Sale</a>
            </div>
        </div>
    )
}
export default SaleSeven; 