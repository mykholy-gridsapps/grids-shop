import Link from "next/link";
import React from "react";

import cls from "./saleTwentyThree.module.scss"

const SaleTwentyThree = () => {
    return (
        <div className={cls.banner}>
            <figure>
                <img src="./imgs/sale/sale-23-1.jpg" />
            </figure>

            <div className={cls.bannerLayer}>
                <div className={cls.bannerLayerLeft}>
                    <h4>Flash Sale</h4>
                    <h5>30% off</h5>
                </div>

                <Link href="demo18-shop.html" className={cls.btn}>Shop now</Link>
            </div>
        </div>
    )
}
export default SaleTwentyThree; 