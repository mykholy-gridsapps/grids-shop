/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState } from "react";
import { i18n, useTranslation } from 'next-i18next';

import AnimatedIcons from "./../../UIs/AnimatedIcons/AnimatedIcons";
import CartDropdown from "../CartDropdown/CartDropdown";
import WishlistDropdown from "../WishlistDropdown/WishlistDropdown";
import MobSidebar from "../MobSidebar/MobSidebar";
import SmallScreenSearch from '../SmallScreenSearch/SmallScreenSearch';

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";

import * as animationData from "../../../public/animated/call.json";

import cls from "./middleHeader.module.scss";

const MiddleHeader = () => {
  const [navDropdown, setNavDropdown] = useState(0);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSmallSearch, setOpenSmallSearch] = useState(false);
  const { t, i18n } = useTranslation('common');

  return (
    <div className={`${cls.headerMiddle} ${cls[i18n.language]}`}>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item lg={2} className={cls.headerLeft}>
            <div className={cls.logo}>
              <i
                className="fa-light fa-grid-2"
                onClick={() => setOpenSidebar((prev) => !prev)}
              ></i>
              <Link href="/">
                <span>
                  <img
                    className={cls.bigImage}
                    src="./imgs/logos/coloredLogo.png"
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

          <Grid item lg={10}>
            <div className={cls.headerRight}>
              <div className={cls.headerSearchWrapper}>
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

                <div
                  className={cls.cart}
                  onMouseEnter={() => setNavDropdown("cart")}
                  onMouseLeave={() => setNavDropdown("")}
                >
                  <Tooltip title="Cart" placement="top">
                    <span onClick={() => router.push("/cart")}>
                      <span className={cls.cartAmount}>
                        $0.00
                        </span>
                      <i className="fa-light fa-cart-shopping"></i>{" "}
                    </span>
                  </Tooltip>

                  {navDropdown === "cart" && <CartDropdown />}
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
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
