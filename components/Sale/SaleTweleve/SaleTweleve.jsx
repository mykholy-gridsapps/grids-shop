import React from "react";
import cls from "./saleTweleve.module.scss"

const SaleTweleve = () => {
    return (
        <div className={cls.banner}>
            <img src="./imgs/sale/sale-12-1.jpg" width="419" height="629" alt="Banner" />
            <div className={cls.bannerLayer}>
                <h3 class="m-b-2">UP TO 70% IN ALL BAGS</h3>
                <h4>Starting at $99</h4>
                <a href="demo3-shop.html" class="btn  btn-dark" role="button">Shop By Bags</a>
            </div>
        </div>
    )
}
export default SaleTweleve; 