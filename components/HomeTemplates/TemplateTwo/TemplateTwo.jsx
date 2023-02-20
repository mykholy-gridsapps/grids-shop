// TEMPLATE COMPONENTS
import CategoriesSideOne from '../../CategoriesSide/CategoriesSideOne/CategoriesSideOne';
import SliderOne from "../../MainSlider/SliderOne/SliderOne";
import InfoBoxOne from "../../InfoBox/InfoBoxOne/InfoBoxOne";
import FeaturesEight from "../../Features/FeaturesEight/FeaturesEight";
import NewsletterFour from '../../Newsletter/NewsletterFour/NewsletterFour';
import SaleEight from '../../Sale/SaleEight/SaleEight';
import SaleSeven from '../../Sale/SaleSeven/SaleSeven';
import SaleSix from '../../Sale/SaleSix/SaleSix';
import SaleFive from '../../Sale/SaleFive/SaleFive';
import SaleOne from '../../Sale/SaleOne/SaleOne';
import ProductsCategoriesTwo from '../../ProductsCategories/ProductsCategoriesTwo/ProductsCategoriesTwo';
import ProductsCategoriesFour from '../../ProductsCategories/ProductsCategoriesFour/ProductsCategoriesFour';
import BlogSix from '../../Blogs/BlogSix/BlogSix';
import BrandsSix from '../../Brands/BrandsSix/BrandsSix';
import TestimonialFiveCarousel from '../../Testimonials/TestimonialFive/TestimonialFiveCarousel';
// MATERIAL UI STUFF
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// STYLES FILES
import cls from './templateTwo.module.scss';

const TemplateOne = () => {
  return (
    <div>
      <Container maxWidth="xxxl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={3}>
            <CategoriesSideOne />
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <SliderOne />
          </Grid>
        </Grid>
        <div className={cls.secondPart}>
          <InfoBoxOne />

          {/* PRODUCTS CATEGORIES */}
          <div className={cls.section}>
            <ProductsCategoriesTwo />
          </div>

          {/* SALES */}
          <div className={cls.sales}>
            <div>
              <SaleFive />
              <SaleOne />
            </div>
            <div>
              <SaleEight />
              <SaleSix />
            </div>
            <div>
              <SaleSeven />
              <SaleFive />
            </div>
          </div>
          {/* SALES */}

          {/* PRODUCTS CATEGORIES */}
          <div>
            <ProductsCategoriesFour />
          </div>

          <BlogSix />
          <TestimonialFiveCarousel />

          <FeaturesEight />
          <BrandsSix />
          <NewsletterFour />
        </div>
      </Container>
    </div>
  )
}

export default TemplateOne