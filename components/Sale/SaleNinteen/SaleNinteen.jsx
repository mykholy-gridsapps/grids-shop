import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import cls from "./saleNinteen.module.scss"

const SaleNinteen = () => {
    return (
        <div className={cls.banner}>
            <Container maxWidth="xl">
                <Grid container className={cls.bannerLayer}>
                    <Grid md={4}>
                        <h2 class="mb-md-0">Top electronic
                            <br />Deals
                        </h2>
                    </Grid>
                    <Grid md={3}>
                        <a href="#" class="btn btn-primary ls-10">View Sale</a>
                    </Grid>
                    <Grid md={4}>
                        <h4 class="mb-1 coupon-sale-text p-0 d-block text-transform-none">
                            <b class="bg-dark text-white font1">Exclusive COUPON</b>
                        </h4>
                        <h5 class="mb-2 coupon-sale-text ls-10 p-0">
                            <i class="ls-0">UP TO</i>
                            <b class="text-white bg-secondary">$100</b> OFF
                        </h5>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default SaleNinteen; 