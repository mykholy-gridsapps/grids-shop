import { Container, Grid } from "@mui/material";
import React from "react";
import HeaderEighteen from "../../Headers/HeaderEighteen/HeaderEighteen";
import SliderSix from "../../MainSlider/SliderSix/SliderSix";
import CategoriesThirtyNine from "../../Categories/CategoriesThirtyNine/CategoriesThirtyNine";
import CollectionSeventySeven from "../../Collections/CollectionSeventySeven/CollectionSeventySeven";
import SaleTwenty from "../../Sale/SaleFourteen/SaleFourteen"
import CollectionSeventyEight from "../../Collections/CollectionSeventyEight/CollectionSeventyEight";

import cls from "./template8.module.scss"
import BrandsOne from "../../Brands/BrandsOne/BrandsOne";
import GalleryOne from "../../Gallery/GalleryOne/GalleryOne";
import FooterEight from "../../Footers/FooterEight/FooterEight";


const Template8 = () => {
  return (
    <>
      <HeaderEighteen />
      <Container maxWidth="xl">
        <SliderSix />
        <CategoriesThirtyNine />
        <CollectionSeventySeven />
        <SaleTwenty />
        <CollectionSeventyEight />
        <BrandsOne />
      </Container>
      <GalleryOne />
      <FooterEight />
    </>
  );
};

export default Template8;
