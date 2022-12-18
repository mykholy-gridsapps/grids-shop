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

const Home = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <div>
      <Container >
        <Grid container spacing={2}>
          <Grid item lg={3} md={4}>
            <ProductOne />
          </Grid>
          
          <Grid item lg={3} md={4}>
            <ProductTwo />
          </Grid>

          <Grid item lg={3} md={4}>
            <ProductThree />
          </Grid>

          <Grid item lg={3} md={4}>
            <ProductFour />
          </Grid>
          
          <Grid item lg={3} md={4}>
            <ProductFive />
          </Grid>
          
          <Grid item lg={3} md={4}>
            <ProductSix />
          </Grid>

          <Grid item lg={3} md={4}>
            <ProductSeven />
          </Grid>

          <Grid item lg={4} md={4}>
            <ProductEight />
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
