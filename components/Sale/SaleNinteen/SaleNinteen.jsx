import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import cls from "./saleNinteen.module.scss"

const SaleNinteen = () => {
    return (
      <div className={cls.banner}>
        <Container maxWidth="xl">
          <Grid container className={cls.bannerLayer}>
            <Grid item md={4}>
              <h2 className="mb-md-0">
                Top electronic
                <br />
                Deals
              </h2>
            </Grid>
            <Grid item md={3}>
              <a href="#" className="btn btn-primary ls-10">
                View Sale
              </a>
            </Grid>
            <Grid item md={4}>
              <h4 className="mb-1 coupon-sale-text p-0 d-block text-transform-none">
                <b className="bg-dark text-white font1">Exclusive COUPON</b>
              </h4>
              <h5 className="mb-2 coupon-sale-text ls-10 p-0">
                <i className="ls-0">UP TO</i>
                <b className="text-white bg-secondary">$100</b> OFF
              </h5>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
}
export default SaleNinteen; 