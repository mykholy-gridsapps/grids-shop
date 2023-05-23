import { Container, Grid } from "@mui/material";
import React from "react";
import ProductOne from "../../ProductCard/ProductOne/ProductOne";

import cls from "./collectionSeventySeven.module.scss"

const CollectionSeventySeven = () => {
    return (
        <div className={cls.collection}>
            <h2>Popular Products</h2>
            <div class={cls.headingSpacer}></div>
            <Grid container spacing={3}>
                <Grid item md={3} sm={4} xs={6}>
                    <ProductOne />
                </Grid>
                <Grid item md={3} sm={4} xs={6}>
                    <ProductOne />
                </Grid>
                <Grid item md={3} sm={4} xs={6}>
                    <ProductOne />
                </Grid>
                <Grid item md={3} sm={4} xs={6}>
                    <ProductOne />
                </Grid>
                <Grid item md={3} sm={4} xs={6}>
                    <ProductOne />
                </Grid>
                <Grid item md={3} sm={4} xs={6}>
                    <ProductOne />
                </Grid>
                <Grid item md={3} sm={4} xs={6}>
                    <ProductOne />
                </Grid>
                <Grid item md={3} sm={4} xs={6}>
                    <ProductOne />
                </Grid>
                <Grid item md={3} sm={4} xs={6}>
                    <ProductOne />
                </Grid>
                <Grid item md={3} sm={4} xs={12}>
                    <ProductOne />
                </Grid>
                <Grid item md={3} sm={4} xs={12}>
                    <ProductOne />
                </Grid>
                <Grid item md={3} sm={4} xs={12}>
                    <ProductOne />
                </Grid>
            </Grid>
        </div>
    )
}
export default CollectionSeventySeven;