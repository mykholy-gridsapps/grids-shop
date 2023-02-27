import { Grid } from "@mui/material";
import { i18n, useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

import cls from "./saleFourteen.module.scss"

const SaleFourteen = () => {
    const { t, i18n } = useTranslation('common');
    return (
        <div className={`${cls.banner} ${cls[i18n.language]}`}>
            <Grid container alignItems={'center'}>
                <Grid item md={4} className={cls.col1}>
                    <h4 className="align-left text-uppercase mb-0">Furniture &amp; Garden</h4>
                    <h3 className="text-white mb-0 align-left text-uppercase">Huge Sale</h3>
                </Grid>
                <Grid item className={cls.col2}>
                    <h5 className="text-white mb-0 position-relative align-left">50<small>%<ins>OFF</ins></small></h5>
                </Grid>
                <Grid item md={4} xs={3} className={cls.col3}>
                    <Link href="demo8-shop.html" className="btn btn-lg btn-primary">Shop Now!</Link>
                </Grid>
            </Grid>
        </div>
    )
}
export default SaleFourteen; 