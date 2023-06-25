/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import TodaysDeals from './TodaysDeals/TodaysDeals';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import BestSelling from './BestSelling/BestSelling';
import SaleTwenty from "../../Sale/SaleTwenty/SaleTwenty";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { useTranslation } from "next-i18next";

import cls from './collection107.module.scss';

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
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} xl={3}>
            <SaleTwenty />
          </Grid>
          <Grid item xs={12} md={8} xl={9}>
            <div className={cls.tabs}>
              <span className={activeTab === 'today' ? cls.active : ''} onClick={() => setActiveTab('today')}><span></span>Today</span>
              <span className={activeTab === 'featured' ? cls.active : ''} onClick={() => setActiveTab('featured')}><span></span>Featured</span>
              <span className={activeTab === 'best' ? cls.active : ''} onClick={() => setActiveTab('best')}><span></span>Best deals</span>
            </div>
            <div className={cls.view}>
              {renderView()}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Collection107;