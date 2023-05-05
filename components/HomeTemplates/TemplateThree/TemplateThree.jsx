// TEMPLATE COMPONENTS
import SliderTen from "../../MainSlider/SliderTen/SliderTen";
import InfoBoxSix from "../../InfoBox/InfoBoxSix/InfoBoxSix";
import FeaturesSix from "../../Features/FeaturesSix/FeaturesSix";
import NewsletterFive from '../../Newsletter/NewsletterFive/NewsletterFive';
import SaleThirteen from '../../Sale/SaleThirteen/SaleThirteen';
import SaleFourteen from '../../Sale/SaleFourteen/SaleFourteen';
import SaleSixteen from '../../Sale/SaleSixteen/SaleSixteen';
import SaleSeventeen from '../../Sale/SaleSeventeen/SaleSeventeen';
import SaleTen from '../../Sale/SaleTen/SaleTen';
import SaleNine from '../../Sale/SaleNine/SaleNine';
import SaleOne from '../../Sale/SaleOne/SaleOne';
import SaleFive from '../../Sale/SaleFive/SaleFive';
import SaleTwo from '../../Sale/SaleTwo/SaleTwo';
import CollectionThree from '../../Collections/CollectionThree/CollectionThree';
import CollectionTen from '../../Collections/CollectionTen/CollectionTen';
import BlogThree from '../../Blogs/BlogThree/BlogThree';
import BrandsTwo from '../../Brands/BrandsTwo/BrandsTwo';
import TestimonialOneCarousel from '../../Testimonials/TestimonialOne/TestimonialOneCarousel';
// MATERIAL UI STUFF
import Grid from "@mui/material/Grid";
// STYLES FILES
import cls from './templateThree.module.scss';

const TemplateThree = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SliderTen />
        </Grid>
      </Grid>
      <div className={cls.secondPart}>

        {/* PRODUCTS CATEGORIES */}
        <div className={cls.section}>
          <CollectionThree />
        </div>

        <InfoBoxSix />

        {/* SALES */}
        <div className={cls.sales}>
          <div>
            <SaleFive />
            <SaleSeventeen />
          </div>
          <div>
            <SaleThirteen />
            <SaleFourteen />
            <SaleTwo />
          </div>
          <div>
            <SaleSixteen />
          </div>
        </div>
        {/* SALES */}

        {/* PRODUCTS CATEGORIES */}
        <div className={cls.section2}>
          <CollectionTen />
        </div>

        {/* SALES */}
        <div className={cls.sales}>
          <div>
            <SaleOne />
          </div>
          <div>
            <SaleTen />
          </div>
          <div>
            <SaleNine />
          </div>
        </div>

        <BlogThree />
        <TestimonialOneCarousel />

        <div className={cls.section}>
          <FeaturesSix />
        </div>
        <div className={cls.section}>
          <BrandsTwo />
        </div>
        <NewsletterFive />
      </div>
    </div>
  )
}

export default TemplateThree;