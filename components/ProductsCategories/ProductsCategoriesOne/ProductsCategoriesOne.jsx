import useMultiTab from './../../custom-hooks/useMultiTab';

import TodaysDeals from './TodaysDeals/TodaysDeals';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import BestSelling from './BestSelling/BestSelling';

import Container from "@mui/material/Container";

import { useTranslation } from "next-i18next";

import cls from './productsCategoriesOne.module.scss';

const Deals = () => {
  const { currentTabIndex, setCurrentTabIndex, currentTab } = useMultiTab([
    <TodaysDeals key={0} />,
    <FeaturedProducts key={1} />,
    <BestSelling key={2} />,
  ]);
  const { t, i18n } = useTranslation('common');

  const tabs = [
    "Today Deals",
    "Featured Products",
    "Best Selling"
  ]

  return (
    <div className={cls.deals}>
      <div className={cls.tabs}>
        {tabs.map((tab, idx) => (
          <span
            className={currentTabIndex === idx ? cls.active : ""}
            onClick={() => setCurrentTabIndex(idx)}
            key={idx}
          >
            <span></span> {tab}
          </span>
        ))}
      </div>

      <div className={cls.view}>{currentTab}</div>
    </div>
  );
}

export default Deals