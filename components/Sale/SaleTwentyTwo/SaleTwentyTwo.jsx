import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { i18n, useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

import cls from "./saleTwentyTwo.module.scss"

const SaleTwentyTwo = () => {
    const { t, i18n } = useTranslation("common");
    return (
        <div className={`${cls.banner} ${cls[i18n.language]}`}>
            <Container maxWidth="xl" className={cls.container}>
                <div className={cls.bannerLayer}>
                    <h2>New Season Shirts</h2>
                    <h3><small>Up to</small>50% Off</h3>

                    <hr/>

                    <h5 >Starting at<span>$<strong>39</strong>99</span></h5>
                    <Link href="demo16-shop.html">Shop Now <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                </div>
            </Container>
        </div>
    )
}
export default SaleTwentyTwo; 