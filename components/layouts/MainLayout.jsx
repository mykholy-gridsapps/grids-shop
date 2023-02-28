import { useState } from "react";

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
import MobileBar from "../Headers/MobileBar/MobileBar";
import HeaderOne from "../Headers/HeaderOne/HeaderOne";
import HeaderTwo from "../Headers/HeaderTwo/HeaderTwo";
import HeaderThree from "../Headers/HeaderThree/HeaderThree";
import HeaderFour from "../Headers/HeaderFour/HeaderFour";
import HeaderFive from "../Headers/HeaderFive/HeaderFive";

import MobSidebar from "../Headers/MobSidebar/MobSidebar";

import cls from './mainLayout.module.scss';

const MainLayout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <FixedHeader setOpenSidebar={setOpenSidebar} />
      <HeaderOne />
      {/* <HeaderTwo /> */}
      {/* <HeaderThree /> */}
      {/* <HeaderFour /> */}
      {/* <HeaderFive /> */}
      <div className={cls.pagesContent}>
        {children}
      </div>
      <FooterTwo />
      <MobileBar />

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
