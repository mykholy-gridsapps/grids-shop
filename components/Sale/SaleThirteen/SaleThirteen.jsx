import { Grid } from "@mui/material";
import React from "react";
import cls from "./saleThirteen.module.scss"

const SaleThirteen = () => {
    return (
        <div className={cls.banner}>
            <div className={cls.bannerContent}>
                <Grid container alignItems={'center'}>
                    <Grid item md={9} sm={8} xs={12}>
                        <h2 className="text-white text-uppercase text-center text-sm-left ls-n-20 mb-md-0 px-4">
                            <b className="d-inline-block mr-3 mb-1 mb-md-0">Big Sale</b> All new fashion brands items up to 70% off
                            <small className="text-transform-none align-middle">Online Purchases Only</small>
                        </h2>
                    </Grid>
                    <Grid item md={3} sm={4} xs= {12}>
                        <a className="btn btn-light btn-white btn-lg" href="category.html">View Sale</a>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default SaleThirteen; 