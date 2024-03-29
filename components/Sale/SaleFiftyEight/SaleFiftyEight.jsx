import React from "react";
import cls from "./saleFiftyEight.module.scss"

const SaleFiftyEight = () => {
    return (
        <div className={cls.banner}>
            <figure>
                <img src="./imgs/sale/sale-58-1.jpg" alt="banner" />
            </figure>
            <div className={cls.bannerLayer}>
                <h3 className="m-b-2">Porto Watches</h3>
                <h4 className="m-b-4 text-primary"><sup className="text-dark"><del>20%</del></sup>30%<sup>OFF</sup></h4>
                <a href="demo1-shop.html" className="text-dark text-uppercase ls-10">Shop Now</a>
                <img src="./imgs/sale/sale-58-2.png" />
            </div>
        </div>
    )
}
export default SaleFiftyEight; 