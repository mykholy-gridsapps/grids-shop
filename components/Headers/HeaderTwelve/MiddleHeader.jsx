/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState } from "react";

import AnimatedIcons from "../../UIs/AnimatedIcons/AnimatedIcons";
import MobSidebar from "../MobSidebar/MobSidebar";
import SmallScreenSearch from '../SmallScreenSearch/SmallScreenSearch';

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import * as animationData from "../../../public/animated/call2.json";


import cls from "./middleHeader.module.scss";
import LangSwitch from '../../switches/LangSwitch/LangSwitch';
import ModeSwitch from '../../switches/ModeSwitch/ModeSwitch';

const MiddleHeader = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSmallSearch, setOpenSmallSearch] = useState(false);

  return (
    <Container maxWidth="xl" className={cls.headerMiddle}>
      <div className={cls.wrapper}>
        <div className={cls.headerLeft}>
          <div className={cls.logo}>
            <i
              className="fa-light fa-grid-2"
              onClick={() => setOpenSidebar((prev) => !prev)}
            ></i>
            <Link href="/">
              <span>
                <img
                  className={cls.bigImage}
                  src="./imgs/logos/coloredSmallLogo.png"
                  alt="tripple-shop-logo"
                />
                <img
                  className={cls.smallImage}
                  src="./imgs/logos/coloredSmallLogo.png"
                  alt="tripple-shop-logo"
                />
              </span>
            </Link>
          </div>
          <div className={cls.links}>
            <ul>
              <li><i className="fa-light fa-location-dot"></i> Find A Store</li>
              <li><i className="fa-light fa-door-open"></i> Open Until <span>9PM</span></li>
            </ul>
          </div>
        </div>

        <div className={cls.headerRight}>

          <div className={cls.links}>
            <ul>
              <li><i className="fa-light fa-address-card"></i> About us</li>
              <li><i className="fa-light fa-truck"></i> Track order</li>
            </ul>
            <LangSwitch />
            <ModeSwitch />
          </div>

          <div className={cls.navbar__main__account}>
            <div className={cls.search} onClick={() => setOpenSmallSearch(prev => !prev)}>
              <span>
                <i className="fa-light fa-magnifying-glass"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SMALL SCREEN SIDE BAR */}
      <MobSidebar
        className={openSidebar ? cls.show : cls.hide}
        isOpen={openSidebar}
        closeMobileMenu={setOpenSidebar}
      />

      {/* SMALL SCREEN SEARCH */}
      {openSmallSearch &&
        <SmallScreenSearch setOpenSmallSearch={setOpenSmallSearch} />
      }
    </Container>
  );
};

export default MiddleHeader;
