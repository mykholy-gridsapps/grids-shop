import React from "react";
import cls from "./saleEleven.module.scss"

const SaleEleven = () => {
    return (
        <div className={cls.banner}>
            <figure>
                <img src="./imgs/sale/sale-11-1.jpg" alt="banner" />
            </figure>
            <div className={cls.bannerLayerLeft}>
                <h4 class="m-b-3 text-body">Check our discounts</h4>
                <h3 class="text-nowrap">More than<span class="d-block mt-1 m-b-3">20 brands</span></h3>
                <hr class="mt-0 mb-2" />
                <h5 class="coupon-sale-text ls-n-10 p-0 mb-0"><i class="ls-0">UP TO</i><b class="ls-n-0">$100</b> OFF
                </h5>
            </div>

            <div className={cls.bannerLayerRight}>
                <a href="#" class="btn btn-dark">Check this sale!</a>
            </div>
        </div>
    )
}
export default SaleEleven; 