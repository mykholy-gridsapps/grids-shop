import { Container } from "@mui/material";
import React from "react";
import BlogTwoCarousel from "../../Blogs/BlogFour/BlogFourCarousel";
import BrandsOne from "../../Brands/BrandsOne/BrandsOne";
import CategoriesFour from "../../Categories/CategoriesFour/CategoryFourCarousel";
import CollectionEightyFour from "../../Collections/CollectionEightyFour/CollectionEightyFour";
import CollectionEightyThree from "../../Collections/CollectionEightyThree/CollectionEightyThree";
import CollectionSixty from "../../Collections/CollectionSixtySeven/CollectionSixtySeven";
import FooterFive from "../../Footers/FooterEight/FooterEight";
import HeaderTwentyThree from "../../Headers/HeaderTwentyThree/HeaderTwentyThree";
import InfoBoxFive from "../../InfoBox/InfoBoxFive/InfoBoxFive";
import SliderThirty from "../../MainSlider/SliderThirty/SliderThirty";
import SaleSixteen from "../../Sale/SaleSixteen/SaleSixteen";

import cls from "./template11.module.scss"


const Template11 = () => {
  return (
    <>
      <HeaderTwentyThree />
      <SliderThirty />
      <div className={cls.collection}>
        <Container maxWidth="xl">
          <CollectionEightyThree />
        </Container>
      </div>
      <Container maxWidth="xl">
        <InfoBoxFive marginBottom="50px" />
        <CollectionEightyFour title="Top Rated Products" subtitle="Amazing products added recently in our catalog" />
        <hr className={cls.seprator} />
        <CategoriesFour />
      </Container>
      <SaleSixteen />
      <Container maxWidth="xl">
        <CollectionEightyFour title="Top Rated Products" subtitle="Only the top rated products added recently in our catalog" />
        <hr className={cls.seprator} />
        <CollectionSixty />
      </Container>
      <BlogTwoCarousel />
      <Container maxWidth="xl">

        <BrandsOne border="none" slides="6"/>
      </Container>
      <FooterFive />
    </>
  );
};

export default Template11;
