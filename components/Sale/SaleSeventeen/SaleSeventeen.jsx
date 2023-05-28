import { Grid } from "@mui/material";
import { i18n, useTranslation } from "next-i18next";
import React from "react";
import cls from "./saleSeventeen.module.scss"

const SaleSeventeen = ({height}) => {
    const { t, i18n } = useTranslation("common");
    return (
        <div className={`${cls.banner} ${cls[i18n.language]}`} style={{height: height}}>
            <figure>
                <img src="./imgs/sale/sale-17-1.jpg" style={{height: height}}/>
            </figure>

            <div className={cls.bannerLayer}>
                <div className={cls.bannerLayerLeft}>
                    <h2 className="text-white">Outlet Selected Items</h2>
                    <h4 className="text-white ls-0"><b>BIG SALE UP TO</b></h4>
                </div>

                <div className={cls.bannerLayerRight}>
                    <h3 className="text-white mb-0">80%<small className="d-inline-block text-center"><b>OFF</b></small></h3>
                </div>
            </div>
        </div>
    )
}
export default SaleSeventeen; 