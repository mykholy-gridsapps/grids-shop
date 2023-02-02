import { Grid } from "@mui/material";
import React from "react";
import cls from "./saleSeventeen.module.scss"

const SaleSeventeen = () => {
    return (
        <div className={cls.banner}>
            <figure>
                <img src="./imgs/sale/sale-17-1.jpg" />
            </figure>

            <div className={cls.bannerLayer}>
                <div className={cls.bannerLayerLeft}>
                    <h2 class="text-white">Outlet Selected Items</h2>
                    <h4 class="text-white ls-0"><b>BIG SALE UP TO</b></h4>
                </div>

                <div className={cls.bannerLayerRight}>
                    <h3 class="text-white mb-0">80%<small class="d-inline-block text-center"><b>OFF</b></small></h3>
                </div>
            </div>
        </div>
    )
}
export default SaleSeventeen; 