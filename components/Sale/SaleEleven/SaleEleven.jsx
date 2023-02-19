import React from "react";
import cls from "./saleEleven.module.scss"

const SaleEleven = () => {
    return (
        <div className={cls.banner}>
            <figure>
                <img src="./imgs/sale/sale-11-1.jpg" alt="banner" />
            </figure>
            <div className={cls.bannerLayerLeft}>
                <h4 className="m-b-3 text-body">Check our discounts</h4>
                <h3 className="text-nowrap">More than<span className="d-block mt-1 m-b-3">20 brands</span></h3>
                <hr className="mt-0 mb-2" />
                <h5 className="coupon-sale-text ls-n-10 p-0 mb-0"><i className="ls-0">UP TO</i><b className="ls-n-0">$100</b> OFF
                </h5>
            </div>

            <div className={cls.bannerLayerRight}>
                <a href="#" className="btn btn-dark">Check this sale!</a>
            </div>
        </div>
    )
}
export default SaleEleven; 