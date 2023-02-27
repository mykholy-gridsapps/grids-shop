import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { i18n, useTranslation } from "next-i18next";
import React from "react";

import cls from "./saleNinteen.module.scss"

const SaleNinteen = () => {
  const { t, i18n } = useTranslation("common")
    return (
      <div className={`${cls.banner} ${cls[i18n.language]}`}>
        <Container maxWidth="xl">
          <Grid container className={cls.bannerLayer}>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <h2 className="mb-md-0">
                Top electronic
                <br />
                Deals
              </h2>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <a href="#" className="btn btn-primary ls-10">
                View Sale
              </a>
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <h4 className="mb-1 coupon-sale-text p-0 d-block text-transform-none">
                <b className="bg-dark text-white font1">Exclusive COUPON</b>
              </h4>
              <h5 className="mb-2 coupon-sale-text ls-10 p-0">
                <b className="text-white bg-secondary">
                <i className="ls-0">UP TO</i>

                  $100</b> OFF
              </h5>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
}
export default SaleNinteen; 