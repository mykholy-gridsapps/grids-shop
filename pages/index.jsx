// REDIRECTION FILES
import langRedirection from "../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../utils/redirections/routeRedirection/routeRedirection";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// REDUX STUFF
import { wrapper } from "../store/store";
// MATERIAL STUFF
import { Template1, Template11, Template12, Template13, Template14, Template15, Template16, Template17, Template18, Template19, Template2, Template20, Template3, Template4, Template43, Template44, Template45, Template46, Template47, Template48, Template49, Template5, Template50, Template51, Template52, Template53, Template54, Template55, Template56, Template57, Template58, Template59, Template6, Template60, Template61, Template7, Template8, Template9 } from "../components";

const Home = () => {

  return (
    <Template20 />
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
