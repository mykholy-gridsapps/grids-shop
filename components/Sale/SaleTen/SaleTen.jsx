import React from "react";
import cls from "./saleTen.module.scss"

const SaleTen = () => {
    return (
        <div className={cls.banner}>
            <figure>
                <img src="./imgs/sale/sale-10-1.jpg" alt="banner" />
            </figure>
            <div className={cls.bannerLayer}>
                <h2 className="m-b-1">Top Brands</h2>
                <h3 className="mb-1 pb-1">Smartphones</h3>
                <h4 className="text-body">* limited time only</h4>
            </div>
            <div className={cls.bannerLayerBottom}>
                <a href="demo2-shop.html" className="btn btn-secondary">Buy Now!</a>
            </div>
        </div>
    )
}
export default SaleTen; 