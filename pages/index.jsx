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
import Link from "next/link";

import {
  TemplateOne,
  BlogOneCarousel,
  BlogTwoCarousel,
  BlogThree,
  BlogFourCarousel,
  BlogFiveCarousel,
  BlogSix,
  BlogSevenCarousel,
  BlogEightCarousel,
  BrandsOne,
  BrandsTwo,
  BrandsThree,
  BrandsFour,
  BrandsFive,
  BrandsSix,
  BrandsSeven,
  BrandsEight,
  CategoryOneCarousel,
  CategoryTwoCarousel,
  CategoryThreeCarousel,
  CategoryFourCarousel,
  CategoryFiveCarousel,
  CategorySixCarousel,
  CategorySevenCarousel,
  CategoryEightCarousel,
  CategoryNineCarousel,
  CategoryTenCarousel,
  CategoryElevenCarousel,
  CategoryTwelveCarousel,
  CategoryThirteenCarousel,
  CategoryFourteenCarousel,
  FeaturesOne,
  FeaturesTwo,
  FeaturesThree,
  FeaturesFour,
  FeaturesFive,
  FeaturesSix,
  FeaturesSeven,
  FeaturesEight,
  FeaturesNine,
  InfoBoxOne,
  InfoBoxTwo,
  InfoBoxThree,
  InfoBoxFour,
  InfoBoxFive,
  InfoBoxSix,
  InfoBoxSeven,
  SliderOne,
  SliderTwo,
  SliderThree,
  SliderFour,
  SliderFive,
  SliderSix,
  SliderSeven,
  SliderEight,
  SliderNine,
  SliderTen,
  SliderEleven,
  SliderTwelve,
  SliderThirteen,
  SliderFourteen,
  NewsletterOne,
  NewsletterTwo,
  NewsletterThree,
  NewsletterFour,
  NewsletterFive,
  NewsletterSix,
  NewsletterSeven,
  NewsletterEight,
  NewsletterNine,
  NewsletterTen,
  NewsletterEleven,
  NewsletterTwelve,
  NewsletterThirteen,
  NewsletterFourteen,
  NewsletterFifteen,
  ProductEight,
  ProductFive,
  ProductFour,
  ProductOne,
  ProductSeven,
  ProductSix,
  ProductThree,
  ProductTwo,
  SaleEight,
  SaleEighteen,
  SaleEleven,
  SaleFifteen,
  SaleFive,
  SaleFour,
  SaleFourteen,
  SaleNine,
  SaleNinteen,
  SaleOne,
  SaleSeven,
  SaleSeventeen,
  SaleSix,
  SaleSixteen,
  SaleTen,
  SaleThirteen,
  SaleThirty,
  SaleThirtyOne,
  SaleThirtyThree,
  SaleThree,
  SaleTweleve,
  SaleTwenty,
  SaleTwentyEight,
  SaleTwentyFive,
  SaleTwentyFour,
  SaleTwentyNine,
  SaleTwentyOne,
  SaleTwentySeven,
  SaleTwentySix,
  SaleTwentyThree,
  SaleTwentyTwo,
  SaleTwo,
  TestimonialFiveCarousel,
  TestimonialFourCarousel,
  TestimonialOneCarousel,
  TestimonialThreeCarousel,
  TestimonialTwoCarousel,
  TestimonialSixCarousel,
  TopNoticeOne,
  TopNoticeTwo,
  TopNoticeThree,
  SaleThirtyFour,
  ProductNine,
  ProductTen,
  ProductEleven,
  ProductTweleve,
  ProductThirteen,
  ProductFourteen,
  SaleThirtyFive,
  CategoryFifteen,
  BlogNineCarousel,
  BlogTenCarousel,
  NewsletterSixteen,
  InfoBoxEight,
  InfoBoxNine,
  ProductFifteen,
  CategorySixteen,
  BrandsNine,
  InfoBoxTen,
  CategorySeventeenCarousel,
  CategoriesSideOne
} from "../components";

import ProductsCategoriesSixteen from "../components/ProductsCategories/ProductsCategoriesSixteen/ProductsCategoriesSixteen";
import ProductsCategoriesFourteen from "../components/ProductsCategories/ProductsCategoriesFourteen/ProductsCategoriesFourteen";
import ProductsCategoriesSeventeen from "../components/ProductsCategories/ProductsCategoriesSeventeen/ProductsCategoriesSeventeen";
import PopupOne from "../components/Popups/PopupOne/PopupOne";
import SaleThirtySeven from "../components/Sale/SaleThirtySeven/SaleThirtySeven";
import CategoriesEighteen from "../components/Categories/CategoriesEighteen/CategoriesEighteen";
import SideMenuOne from "../components/SideMenus/SideMenuOne/SideMenuOne";
import FilterOne from "../components/Filters/FilterOne/FilterOne";
import SaleThirtyEight from "../components/Sale/SaleThirtyEight/SaleThirtyEight";
import SaleThirtyNine from "../components/Sale/SaleThirtyNine/SaleThirtyNine";
import SaleFourty from "../components/Sale/SaleFourty/SaleFourty";
import SaleFourtyOne from "../components/Sale/SaleFourtyOne/SaleFourtyOne";
import NewsLetterSeventeen from "../components/Newsletter/NewsLetterSeventeen/NewsLetterSeventeen";
import SaleFourtyTwo from "../components/Sale/SaleFourtyTwo/SaleFourtyTwo";
import ProductsCategoriesEighteen from "../components/ProductsCategories/ProductsCategoriesEighteen/ProductsCategoriesEighteen";
import CategoriesNineteen from "../components/Categories/CategoriesNineteen/CategoriesNineteen";
import SliderFifteen from "../components/MainSlider/SliderFifteen/SliderFifteen";
import SaleFourtyThree from "../components/Sale/SaleFourtyThree/SaleFourtyThree";
import CategoriesTwenty from "../components/Categories/CategoriesTwenty/CategoriesTwenty";
import SaleFourtyFour from "../components/Sale/SaleFourtyFour/SaleFourtyFour";
import SaleFourtyFive from "../components/Sale/SaleFourtyFive/SaleFourtyFive";
import CategoriesTwentyOne from "../components/Categories/CategoriesTwentyOne/CategoriesTwentyOne";
import CategoriesTwentyTwo from "../components/Categories/CategoriesTwentyTwo/CategoriesTwentyTwo";
import CategoriesTwentyThree from "../components/Categories/CategoriesTwentyThree/CategoriesTwentyThree";
import CategoriesTwentyFour from "../components/Categories/CategoriesTwentyFour/CategoriesTwentyFour";
import CategoriesTwentyFive from "../components/Categories/CategoriesTwentyFive/CategoriesTwentyFive";
import ProductsCategoriesNineteen from "../components/ProductsCategories/ProductsCategoriesNineteen/ProductsCategoriesNineteen";
import BlogEleven from "../components/Blogs/BlogEleven/BlogEleven";
import SaleFourtySix from "../components/Sale/SaleFourtySix/SaleFourtySix";


const Home = () => {
  const { t, i18n } = useTranslation("common");

  {/* <TemplateOne /> */ }


  return (
    <Container maxWidth="xl" style={{ position: 'relative' }}>
      {/* <CategoriesEighteen /> */}
      {/* <SideMenuOne /> */}
      {/* <FeaturesNine /> */}
      <SaleThirtySeven />
      {/* <ProductsCategoriesSeventeen /> */}
      {/* <SliderFourteen /> */}
      {/* <FeaturesNine /> */}
      {/* <PopupOne /> */}
      {/* <FilterOne /> */}
      {/* <SaleThirtyEight /> */}
      {/* <SaleThirtyNine /> */}
      {/* <SaleFourty /> */}
      {/* <SaleFourtyOne /> */}
      {/* <NewsLetterSeventeen /> */}
      {/* <SaleFourtyTwo /> */}
      {/* <ProductsCategoriesEighteen /> */}
      {/* <CategoriesNineteen /> */}
      {/* <SliderFifteen /> */}
      {/* <SaleFourtyThree /> */}
      {/* <CategoriesTwenty /> */}
      {/* <SaleFourtyFour /> */}
      {/* <SaleFourtyFive /> */}
      {/* <CategoriesTwentyOne /> */}
      {/* <CategoriesTwentyTwo /> */}
      {/* <CategoriesTwentyThree /> */}
      {/* <CategoriesTwentyFour /> */}
      {/* <CategoriesTwentyFive /> */}
      {/* <ProductsCategoriesNineteen /> */}
      {/* <BlogEleven /> */}
      {/* <SaleFourtySix /> */}
    </Container >
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
