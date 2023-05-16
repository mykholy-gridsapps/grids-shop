import { useState } from "react";
import { useSelector } from 'react-redux';

import FooterThirteen from "../Footers/FooterThirteen/FooterThirteen";
import FooterTwelve from "../Footers/FooterTwelve/FooterTwelve";
import FooterEleven from "../Footers/FooterEleven/FooterEleven";
import FooterTen from "../Footers/FooterTen/FooterTen";
import FooterNine from "../Footers/FooterNine/FooterNine";
import FooterEight from "../Footers/FooterEight/FooterEight";
import FooterSeven from "../Footers/FooterSeven/FooterSeven";
import FooterSix from "../Footers/FooterSix/FooterSix";
import FooterFive from "../Footers/FooterFive/FooterFive";
import FooterFour from "../Footers/FooterFour/FooterFour";
import FooterThree from "../Footers/FooterThree/FooterThree";
import FooterTwo from "../Footers/FooterTwo/FooterTwo";
import FooterOne from "../Footers/FooterOne/FooterOne";

import FixedHeader from "../Headers/FixedHeader/FixedHeader";
import FixedHeaderTwo from "../Headers/FixedHeaderTwo/FixedHeaderTwo";
import MobileBar from "../Headers/MobileBar/MobileBar";
import HeaderSeven from "../Headers/HeaderSeven/HeaderSeven";
import HeaderOne from "../Headers/HeaderOne/HeaderOne";
import HeaderTwo from "../Headers/HeaderTwo/HeaderTwo";
import HeaderThree from "../Headers/HeaderThree/HeaderThree";
import HeaderFour from "../Headers/HeaderFour/HeaderFour";
import HeaderFive from "../Headers/HeaderFive/HeaderFive";
import HeaderSix from "../Headers/HeaderSix/HeaderSix";
import HeaderEight from '../Headers/HeaderEight/HeaderEight';
import HeaderNine from '../Headers/HeaderNine/HeaderNine';

import MobSidebar from "../Headers/MobSidebar/MobSidebar";

import QuickView from '../ProductCard/QuickView/QuickView';

import cls from './mainLayout.module.scss';

const MainLayout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { quickViewOpened } = useSelector(({ global }) => global);

  return (
    <>
      <FixedHeaderTwo setOpenSidebar={setOpenSidebar} />
      {/* <HeaderOne /> */}
      {/* <HeaderTwo /> */}
      {/* <HeaderThree /> */}
      {/* <HeaderFour /> */}
      {/* <HeaderFive /> */}
      {/* <HeaderSix /> */}
      {/* <HeaderSeven /> */}
      {/* <HeaderEight /> */}
      {/* <HeaderNine /> */}
      <div className={cls.pagesContent}>
        {children}
      </div>
      {/* <FooterTwo /> */}
      {/* <FooterEleven /> */}
      {/* <FooterThirteen /> */}
      <MobileBar />

      {quickViewOpened && <QuickView />}

      {/* SMALL SCREEN SIDE BAR */}
      <MobSidebar
        className={openSidebar ? cls.show : cls.hide}
        isOpen={openSidebar}
        closeMobileMenu={setOpenSidebar}
      />
    </>
  );
};

export default MainLayout;
