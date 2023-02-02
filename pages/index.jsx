import Link from "next/link";
// COMPONENTS
import LangSwitch from "./../components/switches/LangSwitch/LangSwitch";
import ModeSwitch from "../components/switches/ModeSwitch/ModeSwitch";
// REDIRECTION FILES
import langRedirection from "../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../utils/redirections/routeRedirection/routeRedirection";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// INTERNATIONALIZATION
import { useTranslation } from "next-i18next";
// REDUX STUFF
import { wrapper } from "../store/store";
// MATERIAL STUFF
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import ProductOne from "../components/ProductCard/ProductOne/ProductOne";
import ProductTwo from "../components/ProductCard/ProductTwo/ProductTwo";
import ProductThree from "../components/ProductCard/ProductThree/ProductThree";
import ProductFour from "../components/ProductCard/ProductFour/ProductFour";
import ProductFive from "../components/ProductCard/ProductFive/ProductFive";
import ProductSix from "../components/ProductCard/ProductSix/ProductSix";
import ProductSeven from "../components/ProductCard/ProductSeven/ProductSeven";
import ProductEight from "../components/ProductCard/ProductEight/ProductEight";
import FeaturesOne from "../components/Features/FeaturesOne/FeaturesOne";
import FeaturesTwo from "../components/Features/FeaturesTwo/FeaturesTwo";
import FeaturesThree from "../components/Features/FeaturesThree/FeaturesThree";
import FeaturesFour from "../components/Features/FeaturesFour/FeaturesFour";
import FeaturesFive from "../components/Features/FeaturesFive/FeaturesFive";
import FeaturesSix from "../components/Features/FeaturesSix/FeaturesSix";
import FeaturesSeven from "../components/Features/FeaturesSeven/FeaturesSeven";
import FeaturesEight from "../components/Features/FeaturesEight/FeaturesEight";
import NewsletterOne from "../components/Newsletter/NewsletterOne/NewsletterOne";
import NewsletterTwo from "../components/Newsletter/NewsletterTwo/NewsletterTwo";
import NewsletterThree from "../components/Newsletter/NewsletterThree/NewsletterThree";
import NewsletterFour from "../components/Newsletter/NewsletterFour/NewsletterFour";
import NewsletterFive from "../components/Newsletter/NewsletterFive/NewsletterFive";
import NewsletterSix from "../components/Newsletter/NewsletterSix/NewsletterSix";
import NewsletterSeven from "../components/Newsletter/NewsletterSeven/NewsletterSeven";
import NewsletterEight from "../components/Newsletter/NewsletterEight/NewsletterEight";
import NewsletterNine from "../components/Newsletter/NewsletterNine/NewsletterNine";
import NewsletterTen from "../components/Newsletter/NewsletterTen/NewsletterTen";
import NewsletterEleven from "../components/Newsletter/NewsletterEleven/NewsletterEleven";
import NewsletterTwelve from "../components/Newsletter/NewsletterTwelve/NewsletterTwelve";
import NewsletterThirteen from "../components/Newsletter/NewsletterThirteen/NewsletterThirteen";
import NewsletterFourteen from "../components/Newsletter/NewsletterFourteen/NewsletterFourteen";
import NewsletterFifteen from "../components/Newsletter/NewsletterFifteen/NewsletterFifteen";
import TestimonalOne from "../components/Testimonials/TestimonialOne/TestimonialOne";
import TestimonialOneCarousel from "../components/Testimonials/TestimonialOne/TestimonialOneCarousel";
import TestimonialTwoCarousel from "../components/Testimonials/TestimonialTwo/TestimonialTwoCarousel";
import TestimonialThreeCarousel from "../components/Testimonials/TestimonialThree/TestimonialThreeCarousel";
import TestimonialFourCarousel from "../components/Testimonials/TestimonialFour/TestimonialFourCarousel";
import TestimonialFiveCarousel from "../components/Testimonials/TestimonialFive/TestimonialFiveCarousel";
import CategoryOne from "../components/Categories/CategoriesOne/CategoryOne";
import CategoryOneCarousel from "../components/Categories/CategoriesOne/CategoryOneCarousel";
import CategoryTwoCarousel from "../components/Categories/CategoriesTwo/CategoryTwoCarousel";
import CategoryThreeCarousel from "../components/Categories/CategoriesThree/CategoryThreeCarousel";
import CategoryFourCarousel from "../components/Categories/CategoriesFour/CategoryFourCarousel";
import CategoryFiveCarousel from "../components/Categories/CategoriesFive/CategoryFiveCarousel";
import CategorySixCarousel from "../components/Categories/CategoriesSix/CategorySixCarousel";
import CategorySevenCarousel from "../components/Categories/CategoriesSeven/CategorySevenCarousel";
import CategoryEightCarousel from "../components/Categories/CategoriesEight/CategoryEightCarousel";
import CategoryNineCarousel from "../components/Categories/CategoriesNine/CategoryNineCarousel";
import CategoryTenCarousel from "../components/Categories/CategoriesTen/CategoryTenCarousel";
import CategoryElevenCarousel from "../components/Categories/CategoriesEleven/CategoryElevenCarousel";
import CategoryTwelveCarousel from "../components/Categories/CategoriesTwelve/CategoryTwelveCarousel";
import CategoryThirteenCarousel from "../components/Categories/CategoriesThirteen/CategoryThirteenCarousel";
import CategoryFourteenCarousel from "../components/Categories/CategoriesFourteen/CategoryFourteenCarousel";
import SliderOne from "../components/MainSlider/SliderOne/SliderOne";
import SliderTwo from "../components/MainSlider/SliderTwo/SliderTwo";
import SliderThree from "../components/MainSlider/SliderThree/SliderThree";
import SliderFour from "../components/MainSlider/SliderFour/SliderFour";
import SliderFive from "../components/MainSlider/SliderFive/SliderFive";
import SliderSix from "../components/MainSlider/SliderSix/SliderSix";
import SliderSeven from "../components/MainSlider/SliderSeven/SliderSeven";
import SliderEight from "../components/MainSlider/SliderEight/SliderEight";
import SliderNine from "../components/MainSlider/SliderNine/SliderNine";
import SliderTen from "../components/MainSlider/SliderTen/SliderTen";
import SliderEleven from "../components/MainSlider/SliderEleven/SliderEleven";
import SliderTwelve from "../components/MainSlider/SliderTwelve/SliderTwelve";
import SliderThirteen from "../components/MainSlider/SliderThirteen/SliderThirteen";
import BlogOneCarousel from "../components/Blogs/BlogOne/BlogOneCarousel";
import BlogTwoCarousel from "../components/Blogs/BlogTwo/BlogTwoCarousel";
import BlogThree from "../components/Blogs/BlogThree/BlogThree";
import BlogFourCarousel from "../components/Blogs/BlogFour/BlogFourCarousel";
import BlogFiveCarousel from "../components/Blogs/BlogFive/BlogFiveCarousel";
import BlogSix from "../components/Blogs/BlogSix/BlogSix";
import BlogSevenCarousel from "../components/Blogs/BlogSeven/BlogSevenCarousel";
import BlogEightCarousel from "../components/Blogs/BlogEight/BlogEightCarousel";
import SaleOne from "../components/Sale/SaleOne/SaleOne";
import SaleTwo from "../components/Sale/SaleTwo/SaleTwo";
import SaleThree from "../components/Sale/SaleThree/SaleThree";
import SaleFour from "../components/Sale/SaleFour/SaleFour";
import SaleFive from "../components/Sale/SaleFive/SaleFive";
import SaleSix from "../components/Sale/SaleSix/SaleSix";
import SaleSeven from "../components/Sale/SaleSeven/SaleSeven";
import SaleEight from "../components/Sale/SaleEight/SaleEight";
import SaleNine from "../components/Sale/SaleNine/SaleNine";
import SaleTen from "../components/Sale/SaleTen/SaleTen";
import SaleEleven from "../components/Sale/SaleEleven/SaleEleven";
import SaleTweleve from "../components/Sale/SaleTweleve/SaleTweleve";
import SaleThirteen from "../components/Sale/SaleThirteen/SaleThirteen";
import SaleFourteen from "../components/Sale/SaleFourteen/SaleFourteen";
import SaleFifteen from "../components/Sale/SaleFifteen/SaleFifteen";
import SaleSixteen from "../components/Sale/SaleSixteen/SaleSixteen";
import SaleSeventeen from "../components/Sale/SaleSeventeen/SaleSeventeen";
import SaleEighteen from "../components/Sale/SaleEighteen/SaleEighteen";
import SaleNinteen from "../components/Sale/SaleNinteen/SaleNinteen";
import SaleTwentyOne from "../components/Sale/SaleTwentyOne/SaleTwentyOne";
import SaleTwentyTwo from "../components/Sale/SaleTwentyTwo/SaleTwentyTwo";
import SaleTwentyThree from "../components/Sale/SaleTwentyThree/SaleTwentyThree";
import SaleTwentyFour from "../components/Sale/SaleTwentyFour/SaleTwentyFour";
import SaleTwentyFive from "../components/Sale/SaleTwentyFive/SaleTwentyFive";
import SaleTwentySix from "../components/Sale/SaleTwentySix/SaleTwentySix";
import SaleTwentySeven from "../components/Sale/SaleTwentySeven/SaleTwentySeven";
import SaleTwentyEight from "../components/Sale/SaleTwentyEight/SaleTwentyEight";
import SaleTwentyNine from "../components/Sale/SaleTwentyNine/SaleTwentyNine";
import SaleThirty from "../components/Sale/SaleThirty/SaleThirty";

const Home = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <div>
      <Container maxWidth='xl'>
        <Grid container spacing={2}>
          <Grid item lg={3}>
            <SaleOne />
          </Grid>
          <Grid item lg={3}>
            <SaleTwo />
          </Grid>
          <Grid item lg={3}>
            <SaleThree />
          </Grid>
          <Grid item lg={3}>
            <SaleFour />
          </Grid>
          <Grid item lg={3}>
            <SaleFive />
          </Grid>
          <Grid item lg={6}>
            <SaleSix />
          </Grid>
          <Grid item lg={3}>
            <SaleSeven />
          </Grid>
          <Grid item lg={6}>
            <SaleEight />
          </Grid>
          <Grid item lg={3}>
            <SaleNine />
          </Grid>
          <Grid item lg={3}>
            <SaleTen />
          </Grid>
          <Grid item lg={6}>
            <SaleEleven />
          </Grid>
          <Grid item lg={3}>
            <SaleTweleve />
          </Grid>
          <Grid item lg={12}>
            <SaleThirteen />
          </Grid>
          <Grid item lg={12}>
            <SaleFourteen />
          </Grid>
          <Grid item lg={12}>
            <SaleFifteen />
          </Grid>
          <Grid item lg={12}>
          </Grid>
        </Grid>
      </Container>
      <SaleSixteen />
      <Container maxWidth='xl'>
        <Grid container spacing={2}>
          <Grid item lg={12}>
            <SaleSeventeen />
          </Grid>
          <Grid item lg={4}>
            <SaleEighteen />
          </Grid>
        </Grid>
      </Container>
      <SaleNinteen />
      <Container maxWidth='xl'>
        <Grid container spacing={2}>
          <Grid item lg={4}>
            <SaleTwentyOne />
          </Grid>
        </Grid>
      </Container>
      <SaleTwentyTwo />
      <Container maxWidth='xl'>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <SaleTwentyThree />
          </Grid>
          <Grid item lg={6}>
            <SaleTwentyFour />
          </Grid>
          <Grid item lg={6}>
            <SaleTwentyFive />
          </Grid>
          <Grid item lg={6}>
            <SaleTwentySix />
          </Grid>
          <Grid item lg={12}>
            <SaleTwentySeven />
          </Grid>
        </Grid>
      </Container>
      <SaleTwentyEight />
      <SaleTwentyNine />
      <Container maxWidth='xl'>
        <Grid container spacing={2}>
          <Grid item lg={7}>
            <SaleThirty />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, locale, resolvedUrl }) => {
      const languageRedirection = langRedirection(req, locale);
      if (languageRedirection) return languageRedirection;

      const routerRedirection = routeRedirection(req, resolvedUrl);
      if (routerRedirection) return routerRedirection;

      return {
        props: {
          ...(await serverSideTranslations(locale, ["common"])),
        },
      };
    }
);

export default Home;
