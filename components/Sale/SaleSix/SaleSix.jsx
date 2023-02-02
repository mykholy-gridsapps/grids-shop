import React from "react";
import cls from "./saleSix.module.scss"

const SaleSix = () => {
    return (
        <div className={cls.banner}>
            <figure>
                <img src="./imgs/sale/sale-6-1.jpg" alt="banner" />
            </figure>

            <div className={cls.bannerLayer}>
                <h3>Electronic<br />Deals</h3>

                <div className={cls.couponSaleContent}>
                    <h4>
                        Exclusive COUPON
                    </h4>
                    <h5><i class="ls-0">UP TO</i><b>$100</b> OFF</h5>
                    <a href="demo2-shop.html">Get Yours!</a>
                </div>
            </div>
        </div>
    )
}
export default SaleSix; 