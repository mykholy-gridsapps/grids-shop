/* eslint-disable @next/next/no-img-element */
import useMultiTab from './../../custom-hooks/useMultiTab';

import TodaysDeals from './TodaysDeals/TodaysDeals';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import BestSelling from './BestSelling/BestSelling';
import Offer from './Offer/Offer';

import Grid from "@mui/material/Grid";

import { useTranslation } from "next-i18next";

import cls from './productsCategoriesTwo.module.scss';

const DealsTwo = () => {
  const { currentTabIndex, setCurrentTabIndex, currentTab } = useMultiTab([
    <TodaysDeals key={0} />,
    <FeaturedProducts key={1} />,
    <BestSelling key={2} />,
  ]);
  const { t, i18n } = useTranslation('common');

  const tabs = ["Today Deals", "Featured Products", "Best Selling"];

  return (
    <div className={cls.deals}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} xl={3}>
          <Offer />
        </Grid>

        <Grid item md={8} xl={9}>
          <div className={cls.tabs}>
            {tabs.map((tab, idx) => (
              <span
                key={idx}
                className={currentTabIndex === idx ? cls.active : ""}
                onClick={() => setCurrentTabIndex(idx)}
              >
                <span></span>
                {tab}
              </span>
            ))}
          </div>

          <div className={cls.view}>{currentTab}</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default DealsTwo;