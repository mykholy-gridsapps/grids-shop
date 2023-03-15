/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";

import CategoriesCard from "./CategoriesCard/CategoriesCard";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { useTranslation } from "next-i18next";

import cls from "./productsCategoriesFive.module.scss";

const Categories = () => {
  const { t, i18n } = useTranslation("common");

  const router = useRouter();

  return (
    <div className={cls.categories}>
      <div className={`${cls.categories__head}`}>
        <h2>Our Top Categories</h2>
      </div>

      <div className={cls.categories__allCategories}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <CategoriesCard />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <CategoriesCard />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <CategoriesCard />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <CategoriesCard />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <CategoriesCard />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <CategoriesCard />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Categories;
