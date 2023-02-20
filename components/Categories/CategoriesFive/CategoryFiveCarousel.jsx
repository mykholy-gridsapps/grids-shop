import { Grid } from "@mui/material";
import React from "react";

import CategoryFive from "./CategoryFive";

import cls from './categoryFiveCarousel.module.scss'

const CategoryFiveCarousel = () => {
    const array = [...Array(6)]

    return (
        <div className={cls.categoriesCarousel}>
            <h2 className={cls.sectionTitle}>Shop By Category</h2>

            <Grid container columnSpacing={2}>
                {array.map((_, idx) =>
                    <Grid item md={4} sm={6} xs={12} key={idx}>
                        <CategoryFive />
                    </Grid>
                )}
            </Grid>
        </div >
    )
}

export default CategoryFiveCarousel;