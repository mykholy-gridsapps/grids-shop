// TEMPLATE COMPONENTS
import SliderThirteen from "../../MainSlider/SliderThirteen/SliderThirteen";
import InfoBoxFive from "../../InfoBox/InfoBoxFive/InfoBoxFive";
import FeaturesTwo from "../../Features/FeaturesTwo/FeaturesTwo";
import NewsletterSeven from '../../Newsletter/NewsletterSeven/NewsletterSeven';
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

import CollectionThree from '../../Collections/CollectionThree/CollectionThree';
import CollectionFive from '../../Collections/CollectionFive/CollectionFive';
import BlogEight from '../../Blogs/BlogEight/BlogEight';
import BrandsTwo from '../../Brands/BrandsTwo/BrandsTwo';
import TestimonialThreeCarousel from '../../Testimonials/TestimonialThree/TestimonialThreeCarousel';
import CategoriesSixCarousel from '../../Categories/CategoriesSix/CategorySixCarousel';
// MATERIAL UI STUFF
import Grid from "@mui/material/Grid";
// STYLES FILES
import cls from './templateSix.module.scss';

const TemplateFour = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SliderThirteen />
        </Grid>
      </Grid>
      <div className={cls.secondPart}>

        <InfoBoxFive />

        {/* PRODUCTS CATEGORIES */}
        <div className={cls.section}>
          <CollectionThree />
        </div>

        {/* SALES */}
        <CategoriesSixCarousel />
        {/* SALES */}

        {/* PRODUCTS CATEGORIES */}
        <div className={cls.section2}>
          <CollectionFive />
        </div>

        {/* SALES */}
        <div className={cls.sales2}>
          <SaleTwentySeven />
        </div>

        <Grid container className={cls.section3} spacing={2}>
          <Grid item md={3}>
            <BlogEight />
          </Grid>
          <Grid item md={3}>
            <BlogEight />
          </Grid>
          <Grid item md={3}>
            <BlogEight />
          </Grid>
          <Grid item md={3}>
            <BlogEight />
          </Grid>
        </Grid>
        <TestimonialThreeCarousel />

        <div className={cls.section}>
          <FeaturesTwo />
        </div>
        <div className={cls.section}>
          <BrandsTwo />
        </div>
        <NewsletterSeven />
      </div>
    </div>
  )
}

export default TemplateFour;