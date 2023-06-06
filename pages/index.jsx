// REDIRECTION FILES
import langRedirection from "../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../utils/redirections/routeRedirection/routeRedirection";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// REDUX STUFF
import { wrapper } from "../store/store";
// MATERIAL STUFF
import { Template1, Template11, Template12, Template13, Template14, Template15, Template16, Template17, Template2, Template3, Template4, Template5, Template57, Template6, Template7, Template8, Template9 } from "../components";
import Template18 from "../components/HomeTemplates/Template18/Template18";

const Home = () => {

  return (
    <Template18 />
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
