import Link from "next/link";
import React from "react";

import cls from "./saleFour.module.scss"

const SaleFour = ({height}) => {
    return (
        <div className={cls.banner}>
            <figure>
                <img src="./imgs/sale/sale-4-1.jpg" alt="banner" style={{height: height}}/>
            </figure>
            <div className={cls.bannerLayer}>
                <h3>Handbags</h3>
                <h4>Starting at $99</h4>
                <Link href="demo1-shop.html">Shop Now</Link>
            </div>
        </div>
    )
}
export default SaleFour; 