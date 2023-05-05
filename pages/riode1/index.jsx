import React from 'react'
import Container from '@mui/material/Container';
// REDIRECTION FILES
import langRedirection from "../../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../../utils/redirections/routeRedirection/routeRedirection";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// INTERNATIONALIZATION
import { useTranslation } from "next-i18next";
// REDUX STUFF
import { wrapper } from "../../store/store";
import { SaleOne, SaleTwo, SaleThree, SaleFour, SaleFive, SaleSix, SaleSeven, SaleEight, SaleEleven, SliderThirteen } from '../../components';
import FeaturesTen from '../../components/Features/FeaturesTen/FeaturesTen';
import CategoriesEighteen from '../../components/Categories/CategoriesEighteen/CategoriesEighteen';
import CollectionTwenty from '../../components/Collections/CollectionTwenty/CollectionTwenty';

import cls from './riode1.module.scss';

const index = () => {
  return (
    <>
      <SliderThirteen />
      <Container maxWidth="xl">
        <FeaturesTen />
        <CategoriesEighteen />
        <CollectionTwenty />
        <div className={cls.salesWrapepr}>
          {/* <SaleOne /> */}
          {/* <SaleTwo /> */}
          {/* <SaleThree /> */}
          {/* <SaleFour /> */}
          {/* <SaleFive /> */}
          {/* <SaleSix /> */}
          <SaleSeven />
          <SaleEight />
          <SaleEleven />
        </div>
      </Container>
    </>
  )
}

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

export default index
