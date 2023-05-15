// REDIRECTION FILES
import langRedirection from "../../../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../../../utils/redirections/routeRedirection/routeRedirection";
// INTERNATIONALIZATION
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// REDUX STUFF
import { wrapper } from "../../../store/store";
// MATERIAL STUFF
import Container from "@mui/material/Container";

const Template1 = () => {
  return (
    <Container>
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

export default Cart;
