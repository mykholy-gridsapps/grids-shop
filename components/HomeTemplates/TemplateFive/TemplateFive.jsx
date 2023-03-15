// TEMPLATE COMPONENTS
import SliderTwelve from "../../MainSlider/SliderTwelve/SliderTwelve";
import InfoBoxSix from "../../InfoBox/InfoBoxSix/InfoBoxSix";
import FeaturesEight from "../../Features/FeaturesEight/FeaturesEight";
import NewsletterOne from '../../Newsletter/NewsletterOne/NewsletterOne';
import SaleThirteen from '../../Sale/SaleThirteen/SaleThirteen';
import SaleFourteen from '../../Sale/SaleFourteen/SaleFourteen';
import SaleSixteen from '../../Sale/SaleSixteen/SaleSixteen';
import SaleSeventeen from '../../Sale/SaleSeventeen/SaleSeventeen';
import SaleTen from '../../Sale/SaleTen/SaleTen';
import SaleNine from '../../Sale/SaleNine/SaleNine';
import SaleOne from '../../Sale/SaleOne/SaleOne';
import SaleFive from '../../Sale/SaleFive/SaleFive';
import SaleTwo from '../../Sale/SaleTwo/SaleTwo';

import SaleTwentyEight from '../../Sale/SaleTwentyEight/SaleTwentyEight';
import SaleTwentySeven from '../../Sale/SaleTwentySeven/SaleTwentySeven';
import SaleTwentySix from '../../Sale/SaleTwentySix/SaleTwentySix';
import SaleTwentyFive from '../../Sale/SaleTwentyFive/SaleTwentyFive';
import SaleTwentyFour from '../../Sale/SaleTwentyFour/SaleTwentyFour';
import SaleTwentyThree from '../../Sale/SaleTwentyThree/SaleTwentyThree';
import SaleTwentyTwo from '../../Sale/SaleTwentyTwo/SaleTwentyTwo';
import SaleTwentyOne from '../../Sale/SaleTwentyOne/SaleTwentyOne';
import SaleTwenty from '../../Sale/SaleTwenty/SaleTwenty';

import ProductsCategoriesTwelve from '../../ProductsCategories/ProductsCategoriesTwelve/ProductsCategoriesTwelve';
import ProductsCategoriesFour from '../../ProductsCategories/ProductsCategoriesFour/ProductsCategoriesFour';
import BlogSeven from '../../Blogs/BlogSeven/BlogSeven';
import BrandsFive from '../../Brands/BrandsFive/BrandsFive';
import TestimonialTwoCarousel from '../../Testimonials/TestimonialTwo/TestimonialTwoCarousel';
// MATERIAL UI STUFF
import Grid from "@mui/material/Grid";
// STYLES FILES
import cls from './templateFive.module.scss';

const TemplateFour = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SliderTwelve />
        </Grid>
      </Grid>
      <div className={cls.secondPart}>

        <InfoBoxSix />

        {/* PRODUCTS CATEGORIES */}
        <div className={cls.section}>
          <ProductsCategoriesTwelve />
        </div>

        {/* SALES */}
        <div className={cls.sales2}>
            <SaleTwentyEight />
            <SaleTwentyFive />
        </div>
        {/* SALES */}

        {/* PRODUCTS CATEGORIES */}
        <div className={cls.section2}>
          <ProductsCategoriesFour />
        </div>

        {/* SALES */}
        <div className={cls.sales}>
          <div>
            <SaleTwentyFour />
          </div>
          <div>
            <SaleTwentySix />
          </div>
          <div>
            <SaleTwentyThree />
          </div>
        </div>

        <Grid container className={cls.section} spacing={2}>
          <Grid item md={3}>
            <BlogSeven />
          </Grid>
          <Grid item md={3}>
            <BlogSeven />
          </Grid>
          <Grid item md={3}>
            <BlogSeven />
          </Grid>
          <Grid item md={3}>
            <BlogSeven />
          </Grid>
        </Grid>

        <ProductsCategoriesTwelve />

        <TestimonialTwoCarousel />

        <div className={cls.section}>
          <FeaturesEight />
        </div>
        <div className={cls.section}>
          <BrandsFive />
        </div>
        <NewsletterOne />
      </div>
    </div>
  )
}

export default TemplateFour;