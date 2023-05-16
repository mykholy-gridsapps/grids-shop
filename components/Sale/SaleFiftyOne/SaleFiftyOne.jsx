import Link from "next/link";
import React from "react";
import cls from "./saleFiftyOne.module.scss"

const SaleFiftyOne = () => {
    return (
        <div className={cls.banner}>
            <figure>
                <img src="./imgs/sale/sale-51-1.jpg" alt="banner" />
            </figure>
            <div className={cls.bannerLayer}>
                <h3>Trending</h3>
                <h2>Hot Sales</h2>
                <h4>Starting at $99</h4>
                <Link href="#">Buy Now!</Link>
            </div>
        </div>
    )
}
export default SaleFiftyOne; 