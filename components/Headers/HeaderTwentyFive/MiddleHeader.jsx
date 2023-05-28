/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from "react";

import AnimatedIcons from "../../UIs/AnimatedIcons/AnimatedIcons";
import MobSidebar from "../MobSidebar/MobSidebar";
import SmallScreenSearch from '../SmallScreenSearch/SmallScreenSearch';

import { useTranslation } from 'next-i18next';

import * as animationData from "../../../public/animated/call2.json";

import Container from '@mui/material/Container';

import cls from "./middleHeader.module.scss";

const MiddleHeader = () => {
  const [navDropdown, setNavDropdown] = useState(0);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSmallSearch, setOpenSmallSearch] = useState(false);
  const { i18n } = useTranslation('common');
  const router = useRouter();

  return (
    <div className={cls.headerMiddle}>
      <Container maxWidth="xxl" className={cls.wrapper}>
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

        <div className={cls.headerSearchWrapper}>

          <input
            type="search"
            className={cls.formControl}
            placeholder="Search for products..."
            required
          />
          <div className={cls.selectCustom}>
            <select id="cat" name="cat">
              <option value="">All Categories</option>
              <option value="4">Fashion</option>
              <option value="12">- Women</option>
              <option value="13">- Men</option>
              <option value="66">- Jewellery</option>
              <option value="67">- Kids Fashion</option>
              <option value="5">Electronics</option>
              <option value="21">- Smart TVs</option>
              <option value="22">- Cameras</option>
              <option value="63">- Games</option>
              <option value="7">Home &amp; Garden</option>
              <option value="11">Motors</option>
              <option value="31">- Cars and Trucks</option>
              <option value="32">- Motorcycles &amp; Powersports</option>
              <option value="33">- Parts &amp; Accessories</option>
              <option value="34">- Boats</option>
              <option value="57">- Auto Tools &amp; Supplies</option>
            </select>
          </div>
          <button className={cls.btn} type="submit">
            <i className="fa-regular fa-magnifying-glass"></i>
          </button>
        </div>

        <div className={cls.headerRight}>

          <div className={cls.navbar__main__account}>

            <div className={cls.search} onClick={() => setOpenSmallSearch(prev => !prev)}>
              <span>
                <i className="fa-light fa-magnifying-glass"></i>
              </span>
            </div>

            <div className={cls.actions}>

              <div className={cls.contact}>
                <AnimatedIcons animationData={animationData} />
                <div>
                  <h6>1900-888</h6>
                  <span>24/7 support center</span>
                </div>
              </div>

              <div className={`${cls.cart} ${cls[i18n.language]}`}>
                <i className="fa-light fa-bag-shopping"></i>
                <div>
                  <span>$0.00</span>
                  <p>0 items</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </Container>

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
    </div>
  );
};

export default MiddleHeader;
