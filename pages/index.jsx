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

const Home = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <div>
      <Container maxWidth='xl'>
        <Grid container>
          <Grid item lg={12}>
            <FeaturesOne />
          </Grid>
          <Grid item lg={12}>
            <FeaturesTwo />
          </Grid>
        </Grid>
      </Container>
      <FeaturesThree />
      <Container maxWidth='xl'>
        <Grid container>
          <Grid item lg={12}>
            <FeaturesFour />
          </Grid>
          <Grid item lg={12}>
            <FeaturesFive />
          </Grid>
          <Grid item lg={12}>
            <FeaturesSix />
          </Grid>
          <Grid item lg={3}>
            <FeaturesSeven />
          </Grid>
          <Grid item lg={12}>
            <FeaturesEight />
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
