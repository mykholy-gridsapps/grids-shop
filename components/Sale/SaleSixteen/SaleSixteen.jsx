import { Grid } from "@mui/material";
import { i18n, useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

import cls from "./saleSixteen.module.scss"

const SaleSixteen = () => {
    const { t, i18n } = useTranslation("common");
    return (
        <div className={`${cls.banner} ${cls[i18n.language]}`}>
            <h2 className="m-b-1">
                New Season Sale</h2>
            <h3 className="mb-1">40%
                OFF</h3>
            <hr className="divider-short-thick" />
            <Link href="demo11-shop.html" className="btn btn-light">Shop Now <i
                className="fas fa-long-arrow-alt-right ml-2 pl-1"></i></Link>
        </div>
    )
}
export default SaleSixteen; 