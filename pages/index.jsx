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

const Home = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <div>
      <Container maxWidth='xl'>
        <Grid container>
          <Grid item lg={12}>
            <NewsletterOne />
          </Grid>
          <Grid item lg={3}>
            <NewsletterTwo />
          </Grid>
          <Grid item lg={12}>
            <NewsletterThree />
          </Grid>
        </Grid>
      </Container>
      <NewsletterFour />
      <Container maxWidth='xl'>
        <Grid item lg={12}>
          <NewsletterFive />
        </Grid>
        <Grid item lg={12}>
          <NewsletterSix />
        </Grid>
      </Container>
      <NewsletterSeven />
      <Container maxWidth='xl'>
        <Grid item lg={12}>
          <NewsletterEight />
        </Grid>
        <Grid item lg={12}>
          <NewsletterNine />
        </Grid>
      </Container>
      <NewsletterTen />
      <NewsletterEleven />
      <NewsletterTwelve />
      <Container maxWidth='xl'>
        <Grid item lg={12}>
          <NewsletterThirteen />
        </Grid>
        <Grid item lg={12}>
          <NewsletterFourteen />
        </Grid>
        <Grid item lg={12}>
          <NewsletterFifteen />
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
