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
  CategoriesSideOne} from "../components";


const Home = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <Container maxWidth="xl">
      <TemplateOne />
    </Container>
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
