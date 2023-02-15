import Link from "next/link";
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

import ProductsCategoriesOne from "../components/ProductsCategories/ProductsCategoriesOne/ProductsCategoriesOne";
import ProductsCategoriesTwo from "../components/ProductsCategories/ProductsCategoriesTwo/ProductsCategoriesTwo";
import ProductsCategoriesThree from "../components/ProductsCategories/ProductsCategoriesThree/ProductsCategoriesThree";
import ProductsCategoriesFour from "../components/ProductsCategories/ProductsCategoriesFour/ProductsCategoriesFour";
import ProductsCategoriesFive from "../components/ProductsCategories/ProductsCategoriesFive/ProductsCategoriesFive";

const Home = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <Container maxWidth="xl" sx={{ padding: "0 !important" }}>
      <ProductsCategoriesOne />
      <ProductsCategoriesTwo />
      <ProductsCategoriesThree />
      <ProductsCategoriesFour />
      <ProductsCategoriesFive />
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
