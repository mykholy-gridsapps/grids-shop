import { Grid } from "@mui/material";
import React from "react";
import cls from "./saleThirtyThree.module.scss"

const SaleThirtyThree = () => {
    return (
        <div className={cls.banner}>
            <figure>
                <img src="./imgs/sale/sale-32-1.png" alt="banner" width="580" height="430" />
            </figure>

            <div className={cls.bannerLayer}>
                <h3>Fragrance Offers</h3>
                <h4>
                    <small ><sup>up</sup><sub>to</sub></small><i>45%</i>
                </h4>
                <h5 >off</h5>
                <a href="demo34-shop.html" className={cls.btn}>Shop now</a>
            </div>
        </div>
    )
}
export default SaleThirtyThree; 