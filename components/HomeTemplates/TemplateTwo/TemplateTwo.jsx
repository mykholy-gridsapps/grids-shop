// TEMPLATE COMPONENTS
import SliderSix from "../../MainSlider/SliderSix/SliderSix";
import InfoBoxFour from "../../InfoBox/InfoBoxFour/InfoBoxFour";
import FeaturesFive from "../../Features/FeaturesFive/FeaturesFive";
import NewsletterThree from '../../Newsletter/NewsletterThree/NewsletterThree';
import SaleTen from '../../Sale/SaleTen/SaleTen';
import SaleNine from '../../Sale/SaleNine/SaleNine';
import SaleEleven from '../../Sale/SaleEleven/SaleEleven';
import SaleFive from '../../Sale/SaleFive/SaleFive';
import SaleTwo from '../../Sale/SaleTwo/SaleTwo';
import SaleThree from '../../Sale/SaleThree/SaleThree';
import SaleFour from '../../Sale/SaleFour/SaleFour';
import CollectionEight from '../../Collections/CollectionEight/CollectionEight';
import CollectionNine from '../../Collections/CollectionNine/CollectionNine';
import BlogFour from '../../Blogs/BlogFour/BlogFour';
import BrandsFour from '../../Brands/BrandsFour/BrandsFour';
import TestimonialFourCarousel from '../../Testimonials/TestimonialFour/TestimonialFourCarousel';
// MATERIAL UI STUFF
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// STYLES FILES
import cls from './templateTwo.module.scss';

const TemplateTwo = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SliderSix />
        </Grid>
      </Grid>
      <div className={cls.secondPart}>
        <InfoBoxFour />

        {/* PRODUCTS CATEGORIES */}
        <div className={cls.section}>
          <CollectionEight />
        </div>

        {/* SALES */}
        <div className={cls.sales}>
          <div>
            <SaleFive />
            <SaleTwo />
            <SaleFour />
            <SaleThree />
          </div>
          <div>
            <SaleTen />
            <SaleEleven />
          </div>
          <div>
            <SaleNine />
            <SaleFive />
          </div>
        </div>
        {/* SALES */}

        {/* PRODUCTS CATEGORIES */}
        <div className={cls.section2}>
          <CollectionNine />
        </div>

        <BlogFour />
        <TestimonialFourCarousel />

        <div className={cls.section}>
          <FeaturesFive />
        </div>
        <BrandsFour />
        <NewsletterThree />
      </div>
    </div>
  )
}

export default TemplateTwo