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

const MiddleHeader = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSmallSearch, setOpenSmallSearch] = useState(false);

  return (
    <Container maxWidth="xl" className={cls.headerMiddle}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item lg={3} className={cls.headerLeft}>
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
        </Grid>

        <Grid item lg={9}>
          <div className={cls.headerRight}>
            <div className={cls.headerSearchWrapper}>
              <input
                type="search"
                className={cls.formControl}
                name="q"
                id="q"
                placeholder="Search..."
                required
              />
              <button className={cls.btn} type="submit">
                <i className="fa-regular fa-magnifying-glass"></i>
              </button>
            </div>


            <div className={cls.navbar__main__account}>
              <div className={cls.search} onClick={() => setOpenSmallSearch(prev => !prev)}>
                <span>
                  <i className="fa-light fa-magnifying-glass"></i>
                </span>
              </div>

              <div className={cls.contact}>
                <AnimatedIcons animationData={animationData} />
                <div>
                  <h6>1900-888</h6>
                  <span>24/7 support center</span>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

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
