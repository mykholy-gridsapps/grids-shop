import React from "react";
import cls from "./saleTwentyFive.module.scss"

const SaleTwentyFive = () => {
    return (
        <div className={cls.banner}>
            <figure>
                <img src="./imgs/sale/sale-25-1.jpg" />
            </figure>

            <div className={cls.bannerLayerCenter}>
                <h3>Deal Promos</h3>
                <h5>Starting at $99</h5>
            </div>
            <div className={cls.bannerLayerLeft}>
                <h6>50<small><sup>%</sup><sub>off</sub></small></h6>
            </div>
            <div className={cls.bannerLayerTop}>
                <h6>30<small><sup>%</sup><sub>off</sub></small></h6>
            </div>
            <div className={cls.bannerLayerBottom}>
                <h6>70<small><sup>%</sup><sub>off</sub></small></h6>
            </div>
        </div>
    )
}
export default SaleTwentyFive; 