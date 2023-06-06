/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from "react";

import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';
import CartDropdown from "../CartDropdown/CartDropdown";
import WishlistDropdown from "../WishlistDropdown/WishlistDropdown";
import MobSidebar from "../MobSidebar/MobSidebar";
import SmallScreenSearch from '../SmallScreenSearch/SmallScreenSearch';

import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";

import { useTranslation } from "next-i18next";

import cls from "./headerThirtyFour.module.scss";

const HeaderThirtyFour = () => {
  const [navDropdown, setNavDropdown] = useState(0);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSmallSearch, setOpenSmallSearch] = useState(false);
  const router = useRouter();
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.header}>
      <Container maxWidth="xxxl">
        <TopHeader />
      </Container>

      <Container maxWidth="xxl" className={cls.container}>
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

          <div className={cls.headerSearchWrapper}>
            <div className={cls.selectCustom}>
              <select id="cat" name="cat" className={cls[i18n.language]}>
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
          </div>

          <div className={`${cls.links} ${cls[i18n.language]}`}>
            <ul className={`${cls.navLinks} ${cls[i18n.language]}`}>
              <li>Flash Deals</li>
              <li>Special</li>
              <li>Top Sellers</li>
            </ul>
          </div>

        </div>

        <div className={cls.headerRight}>

          <div className={cls.navbar__main__account}>
            <div className={cls.search} onClick={() => setOpenSmallSearch(prev => !prev)}>
              <span>
                <i className="fa-light fa-magnifying-glass"></i>
              </span>
            </div>
            <div className={cls.compare}>
              <Tooltip title="compare" placement="top">
                <span onClick={() => router.push("/compare")}>
                  <i className="fa-light fa-code-compare"></i>
                </span>
              </Tooltip>
            </div>

            <div
              className={cls.wishlist}
              onMouseEnter={() => setNavDropdown("wishlist")}
              onMouseLeave={() => setNavDropdown("")}
            >
              <Tooltip title="wishlist" placement="top">
                <span onClick={() => router.push("/wishlist")}>
                  <i className="fa-light fa-heart"></i>
                </span>
              </Tooltip>

              {navDropdown === "wishlist" && <WishlistDropdown />}
            </div>

            <div
              className={cls.cart}
              onMouseEnter={() => setNavDropdown("cart")}
              onMouseLeave={() => setNavDropdown("")}
            >
              <Tooltip title="Cart" placement="top">
                <span onClick={() => router.push("/cart")}>
                  <i className="fa-light fa-cart-shopping"></i>{" "}
                  <span className={cls.cartAmount}>$0.00</span>
                </span>
              </Tooltip>

              {navDropdown === "cart" && <CartDropdown />}
            </div>
          </div>
        </div>
      </Container>

      <BottomHeader />

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

export default HeaderThirtyFour;
