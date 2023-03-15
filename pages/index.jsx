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


const Home = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <ProductEleven />
          <br />
        </Grid>
        <Grid item lg={3}>
          <ProductTweleve />
          <br />
        </Grid>
        <Grid item lg={3}>
          <ProductThirteen />
          <br />
        </Grid>
        <Grid item lg={3}>
          <ProductFourteen />
          <br />
        </Grid>
        <Grid item lg={3}>
          <ProductFifteen />
          <br />
        </Grid>
        <Grid item lg={3}>
          <CategorySixteen />
          <br />
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <TestimonialSixCarousel />
          <br />
        </Grid>
        <Grid item xs={12}>
          <InfoBoxNine />
          <br />
        </Grid>
        <Grid item xs={12}>
          <BlogTenCarousel />
          <br />
        </Grid>
        <Grid item xs={12}>
          <BrandsNine />
          <br />
        </Grid>
        <Grid item xs={12}>
          <InfoBoxTen />
          <br />
        </Grid>
        <Grid item xs={12}>
          <CategorySeventeenCarousel />
          <br />
        </Grid>
      </Grid>
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
