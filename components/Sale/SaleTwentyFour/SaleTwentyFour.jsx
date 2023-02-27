import React from "react";

import cls from "./saleTwentyFour.module.scss"

const SaleTwentyFour = () => {
    return (
        <div className={cls.banner}>
            <figure>
                <img src="./imgs/sale/sale-24-1.jpg" />
            </figure>

            <div className={cls.bannerLayer}>
                <h5>Find the Boundaries. Push Through!</h5>
                <h3>Summer Sale</h3>
                <h4>30% off</h4>
            </div>
        </div>
    )
}
export default SaleTwentyFour; 