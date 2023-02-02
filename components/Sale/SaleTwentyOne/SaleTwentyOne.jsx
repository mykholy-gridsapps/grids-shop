import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import cls from "./saleTwentyOne.module.scss"

const SaleTwentyOne = () => {
    return (
        <div className={cls.banner}>
            <img src="./imgs/sale/sale-21-1.jpg" alt="banner" />
            <div className={cls.bannerLayer}>
                <h3 class="m-b-1 font3 text-right text-primary">Orange</h3>
                <h5 class="ls-n-20 d-inline-block m-r-2 text-left">FROM</h5>
                <h4 class="ls-n-20 text-price float-right text-left">$
                    <b>19</b>99</h4>
                    <a href="demo15-shop.html" class="btn btn-modern btn-sm btn-dark">Shop Now!</a>
            </div>
        </div>
    )
}
export default SaleTwentyOne; 