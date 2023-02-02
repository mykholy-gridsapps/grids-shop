import React from "react";
import cls from "./saleNine.module.scss"

const SaleNine = () => {
    return (
        <div className={cls.banner}>
            <figure>
                <img src="./imgs/sale/sale-9-1.jpg" alt="banner" />
            </figure>
            <div className={cls.bannerLayer}>
                <h4>Amazing</h4>
                <h3>Collection</h3>
                <hr />
                <h5>Check our discounts</h5>
            </div>
            <div className={cls.bannerLayerBottom}>
                <a href="demo2-shop.html">Shop Now!</a>
            </div>
        </div>
    )
}
export default SaleNine; 