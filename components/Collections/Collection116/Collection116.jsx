/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import TodaysDeals from './TodaysDeals/TodaysDeals';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import BestSelling from './BestSelling/BestSelling';
import SaleTwenty from "../../Sale/SaleTwenty/SaleTwenty";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { useTranslation } from "next-i18next";

import cls from './collection116.module.scss';

const Collection107 = () => {
  const [activeTab, setActiveTab] = useState('today');
  const { t, i18n } = useTranslation('common');

  const renderView = () => {
    switch (activeTab) {
      case 'today':
        return <TodaysDeals />
      case 'featured':
        return <FeaturedProducts />
      case 'best':
        return <BestSelling />
    }
  }

  return (
    <div className={cls.deals}>
      <Container maxWidth="xxl">
        <div className={cls.tabs}>
          <span className={activeTab === 'today' ? cls.active : ''} onClick={() => setActiveTab('today')}><span></span>Today</span>
          <span className={activeTab === 'featured' ? cls.active : ''} onClick={() => setActiveTab('featured')}><span></span>Featured</span>
          <span className={activeTab === 'best' ? cls.active : ''} onClick={() => setActiveTab('best')}><span></span>Best deals</span>
        </div>
        <div className={cls.view}>
          {renderView()}
        </div>
      </Container>
    </div>
  )
}

export default Collection107;