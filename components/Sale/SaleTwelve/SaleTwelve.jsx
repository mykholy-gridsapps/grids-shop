import React from "react";
import cls from "./saleTwelve.module.scss"

const SaleTwelve = () => {
    return (
        <div className={cls.banner}>
            <img src="./imgs/sale/sale-12-1.jpg" width="419" height="629" alt="Banner" />
            <div className={cls.bannerLayer}>
                <h3 className="m-b-2">UP TO 70% IN ALL BAGS</h3>
                <h4>Starting at $99</h4>
                <a href="demo3-shop.html" className="btn  btn-dark" role="button">Shop By Bags</a>
            </div>
        </div>
    )
}
export default SaleTwelve; 