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
                    <h4 class="text-white mb-0">Flash Sale</h4>
                    <h5 class="text-uppercase text-white mb-0">30% off</h5>
                </div>

                <a href="demo18-shop.html" className={cls.btn}>Shop now</a>
            </div>
        </div>
    )
}
export default SaleTwentyThree; 