import { Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

import cls from "./saleThirtyFive.module.scss"

const SaleThirtyFive = () => {
    return (
        <div className={cls.banner}>
            <span className={cls.Feature}>
                <span>FEATURED</span>
            </span>
            <a>
                <img src="./imgs/sale/sale-35-1.webp" alt="" />
            </a>
        </div>
    )
}
export default SaleThirtyFive; 