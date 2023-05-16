import { Container, Grid } from "@mui/material";
import React from "react";
import ProductOne from "../../ProductCard/ProductOne/ProductOne";

import cls from "./collectionSixtyThree.module.scss"

const CollectionSixtyThree = () => {
    return (
        <Container maxWidth="xxl" className={cls.collection}>
            <h2>Popular Products</h2>
            <Grid container spacing={3}>
                <Grid item xl={2} md={3} sm={4} xs={12}>
                    <ProductOne />
                </Grid>
                <Grid item xl={2} md={3} sm={4} xs={12}>
                    <ProductOne />
                </Grid>
                <Grid item xl={2} md={3} sm={4} xs={12}>
                    <ProductOne />
                </Grid>
                <Grid item xl={2} md={3} sm={4} xs={12}>
                    <ProductOne />
                </Grid>
                <Grid item xl={2} md={3} sm={4} xs={12}>
                    <ProductOne />
                </Grid>
                <Grid item xl={2} md={3} sm={4} xs={12}>
                    <ProductOne />
                </Grid>
                <Grid item xl={2} md={3} sm={4} xs={12}>
                    <ProductOne />
                </Grid>
                <Grid item xl={2} md={3} sm={4} xs={12}>
                    <ProductOne />
                </Grid>
                <Grid item xl={2} md={3} sm={4} xs={12}>
                    <ProductOne />
                </Grid>
                <Grid item xl={2} md={3} sm={4} xs={12}>
                    <ProductOne />
                </Grid>
                <Grid item xl={2} md={3} sm={4} xs={12}>
                    <ProductOne />
                </Grid>
                <Grid item xl={2} md={3} sm={4} xs={12}>
                    <ProductOne />
                </Grid>
            </Grid>
        </Container>
    )
}
export default CollectionSixtyThree;