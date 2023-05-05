// TEMPLATE COMPONENTS
import SliderEleven from "../../MainSlider/SliderEleven/SliderEleven";
import InfoBoxSeven from "../../InfoBox/InfoBoxSeven/InfoBoxSeven";
import FeaturesOne from "../../Features/FeaturesOne/FeaturesOne";
import NewsletterSix from '../../Newsletter/NewsletterSix/NewsletterSix';
import SaleThirteen from '../../Sale/SaleThirteen/SaleThirteen';
import SaleFourteen from '../../Sale/SaleFourteen/SaleFourteen';
import SaleSixteen from '../../Sale/SaleSixteen/SaleSixteen';
import SaleSeventeen from '../../Sale/SaleSeventeen/SaleSeventeen';
import SaleTen from '../../Sale/SaleTen/SaleTen';
import SaleNine from '../../Sale/SaleNine/SaleNine';
import SaleOne from '../../Sale/SaleOne/SaleOne';
import SaleFive from '../../Sale/SaleFive/SaleFive';
import SaleTwo from '../../Sale/SaleTwo/SaleTwo';

import SaleTwentyEight from './../../Sale/SaleTwentyEight/SaleTwentyEight';
import SaleTwentySeven from './../../Sale/SaleTwentySeven/SaleTwentySeven';
import SaleTwentySix from './../../Sale/SaleTwentySix/SaleTwentySix';
import SaleTwentyFive from './../../Sale/SaleTwentyFive/SaleTwentyFive';
import SaleTwentyFour from './../../Sale/SaleTwentyFour/SaleTwentyFour';
import SaleTwentyThree from './../../Sale/SaleTwentyThree/SaleTwentyThree';
import SaleTwentyTwo from './../../Sale/SaleTwentyTwo/SaleTwentyTwo';
import SaleTwentyOne from './../../Sale/SaleTwentyOne/SaleTwentyOne';
import SaleTwenty from './../../Sale/SaleTwenty/SaleTwenty';

import CollectionTwo from '../../Collections/CollectionTwo/CollectionTwo';
import CollectionEleven from '../../Collections/CollectionEleven/CollectionEleven';
import BlogOne from '../../Blogs/BlogOne/BlogOne';
import BrandsSeven from '../../Brands/BrandsSeven/BrandsSeven';
import TestimonialOneCarousel from '../../Testimonials/TestimonialOne/TestimonialOneCarousel';
// MATERIAL UI STUFF
import Grid from "@mui/material/Grid";
// STYLES FILES
import cls from './templateFour.module.scss';

const TemplateFour = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SliderEleven />
        </Grid>
      </Grid>
      <div className={cls.secondPart}>

        {/* PRODUCTS CATEGORIES */}
        <div className={cls.section}>
          <CollectionTwo />
        </div>

        <InfoBoxSeven />

        {/* SALES */}
        <div className={cls.sales}>
          <div>
            <SaleTwentyFive />
            <SaleTwentyFour />
          </div>
          <div>
            <SaleTwentyTwo />
          </div>
          <div>
            <SaleTwentyFive />
            <SaleTwenty />
          </div>
        </div>
        {/* SALES */}

        {/* PRODUCTS CATEGORIES */}
        <div className={cls.section2}>
          <CollectionEleven />
        </div>

        {/* SALES */}
        <div className={cls.sales}>
          <div>
            <SaleTwentyOne />
          </div>
          <div>
            <SaleTwentySeven />
          </div>
          <div>
            <SaleThirteen />
          </div>
        </div>

        <Grid container className={cls.section} spacing={2}>
          <Grid item md={3}>
            <BlogOne />
          </Grid>
          <Grid item md={3}>
            <BlogOne />
          </Grid>
          <Grid item md={3}>
            <BlogOne />
          </Grid>
          <Grid item md={3}>
            <BlogOne />
          </Grid>
        </Grid>
        <TestimonialOneCarousel />

        <div className={cls.section}>
          <FeaturesOne />
        </div>
        <div className={cls.section}>
          <BrandsSeven />
        </div>
        <NewsletterSix />
      </div>
    </div>
  )
}

export default TemplateFour;