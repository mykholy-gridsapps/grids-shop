import React from "react";
import { useTranslation } from "next-i18next";

import CategoryFourtySeven from "./CategoryFourtySeven";
import cls from './categoriesFourtySevenCarousel.module.scss'
import { Grid } from "@mui/material";


const CategoriesFourtySevenCarousel = () => {
    const array = [...Array(7)];
    const { t, i18n } = useTranslation('common')

    return (
        <div className={`${cls.categoriesCarousel} ${cls[i18n.language]}`}>
            <div className={cls.title}>
                <h2>Featured Categories</h2>
            </div>
            <Grid container spacing={3}>
                <Grid item md={3} sm={4}>
                    <CategoryFourtySeven />
                </Grid>
                <Grid item md={6} sm={8}>
                    <CategoryFourtySeven />
                </Grid>
                <Grid item md={3} sm={5}>
                    <CategoryFourtySeven />
                </Grid>
                <Grid item md={4} sm={7}>
                    <CategoryFourtySeven />
                </Grid>
                <Grid item md={3} sm={4}>
                    <CategoryFourtySeven />
                </Grid>
                <Grid item md={5} sm={8}>
                    <CategoryFourtySeven />
                </Grid>
            </Grid>
        </div>
    )
}

export default CategoriesFourtySevenCarousel;