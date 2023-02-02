import React from "react";
import cls from "./saleTwo.module.scss"

const SaleTwo = () => {
    return (
        <div className={cls.banner}>
            <figure>
                <img src="./imgs/sale/sale-2-1.jpg" alt="banner" />
            </figure>
            <div className={cls.bannerLayer}>
                <h3 class="m-b-2">Porto Watches</h3>
                <h4 class="m-b-4 text-primary"><sup class="text-dark"><del>20%</del></sup>30%<sup>OFF</sup></h4>
                <a href="demo1-shop.html" class="text-dark text-uppercase ls-10">Shop Now</a>
            </div>
        </div>
    )
}
export default SaleTwo; 