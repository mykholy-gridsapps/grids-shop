import React from "react";
import cls from "./saleTen.module.scss"

const SaleTen = () => {
    return (
        <div className={cls.banner}>
            <figure>
                <img src="./imgs/sale/sale-10-1.jpg" alt="banner" />
            </figure>
            <div className={cls.bannerLayer}>
                <h2 class="m-b-1">Top Brands</h2>
                <h3 class="mb-1 pb-1">Smartphones</h3>
                <h4 class="text-body">* limited time only</h4>
            </div>
            <div className={cls.bannerLayerBottom}>
                <a href="demo2-shop.html" class="btn btn-secondary">Buy Now!</a>
            </div>
        </div>
    )
}
export default SaleTen; 