import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { i18n, useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

import cls from "./saleSeventyTwo.module.scss"

const SaleSeventyTwo = () => {
    const { t, i18n } = useTranslation("common");
    return (
        <div className={`${cls.banner} ${cls[i18n.language]}`}>
            <Grid container>
                <Grid xs={12}>
                    <figure>
                        <img src="./imgs/brands/brand-4.png" alt="brand" class="w-auto" width="140" height="60"/>
                    </figure>
                </Grid>
                <Grid xs={12}>
                    <div className={cls.bannerLayer}>
                        <h3><small>Up to</small>50% Off</h3>
                        <hr />
                        <h5 >Starting at<span>$<strong>39</strong>99</span></h5>
                        <Link href="demo16-shop.html">Shop Now <i className="fas fa-long-arrow-alt-right"></i>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default SaleSeventyTwo; 