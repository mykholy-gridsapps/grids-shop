/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import TopNav from "./TopNav/TopNav";
import LangSwitch from "../../switches/LangSwitch/LangSwitch";
import CurrencySwitch from '../../switches/CurrencySwitch/CurrencySwitch';
import ModeSwitch from "../../switches/ModeSwitch/ModeSwitch";
import MobSidebar from "../MobSidebar/MobSidebar";
import LinkDropdown from '../LinkDropdown/LinkDropdown';
import CartDropdown from "../CartDropdown/CartDropdown";
import WishlistDropdown from "../WishlistDropdown/WishlistDropdown";

import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";

import { useTranslation } from "next-i18next";

import cls from "./headerThirtyNine.module.scss";

const HeaderThirtyNine = ({ rounded }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [navDropdown, setNavDropdown] = useState(0);
  const router = useRouter();
  const { t, i18n } = useTranslation("nav");

  return (
    <div className={cls.navbar}>
      <TopNav />
      <Container maxWidth="xxl" className={`${cls.search__wrapper}`}>

        <div className={cls.details}>
          <span>
            +201025864313
          </span>
          <span>
            info@trippleshop.com
          </span>
        </div>

        <div className={cls.logo}>
          <Link href="/">
            <img
              className={cls.bigImage}
              src="./imgs/logos/whiteSmallLogo.png"
              alt="tripple-shop-logo"
            />
          </Link>
        </div>

        <div className={cls.sideWrapper}>

          <div
            className={`${cls.navbar__search__searchArea} ${cls.rounded} ${rounded ? cls.rounded : ""
              } ${cls[i18n.language]}`}
          >
            <input type="text" placeholder="Search for products" />

            <button>
              <i className="fa-light fa-magnifying-glass"></i>
            </button>
          </div>

          <div className={cls.navbar__main__account}>
            <div className={cls.account}>
              <Tooltip title="Compare" placement="top">
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
              <Tooltip title="Wishlist" placement="top">
                <span onClick={() => router.push("/wishlist")}>
                  <i className="fa-light fa-heart"></i>
                </span>
              </Tooltip>

              {navDropdown === "wishlist" && (
                <WishlistDropdown />
              )}
            </div>

            <div
              className={cls.cart}
              onMouseEnter={() => setNavDropdown("cart")}
              onMouseLeave={() => setNavDropdown("")}
            >
              <Tooltip title="Cart" placement="top">
                <span onClick={() => router.push("/cart")}>
                  <i className="fa-light fa-cart-shopping"></i>{" "}
                  <span>$0.00</span>
                </span>
              </Tooltip>

              {navDropdown === "cart" && (
                <CartDropdown />
              )}
            </div>
          </div>
        </div>
      </Container>

      <div className={cls.navbar__main}>
        <Container maxWidth="xxl" className={`${cls.navbar_mainNav}`}>
          <div className={cls.smallLogo}>
            <i
              className="fa-light fa-grid-2"
              onClick={() => setOpenSidebar(!openSidebar)}
            ></i>{" "}
            <Link href="/">
              <img
                className={cls.smallImage}
                src="./imgs/logos/coloredSmallLogo.png"
                alt="tripple-shop-logo"
              />
            </Link>
          </div>

          <div className={cls.switches}>
            <LangSwitch />

            <CurrencySwitch />

            <ModeSwitch />
          </div>

          <div className={cls.links}>
            <ul className={`${cls.navLinks} ${cls[i18n.language]}`}>
              <li
                onMouseEnter={() => setNavDropdown(1)}
                onMouseLeave={() => setNavDropdown(0)}
              >
                <span>
                  {" "}
                  Movies & Games <i className="fa-regular fa-angle-down"></i>
                </span>

                {navDropdown === 1 && (
                  <LinkDropdown />
                )}
              </li>

              <li
                onMouseEnter={() => setNavDropdown(2)}
                onMouseLeave={() => setNavDropdown(0)}
              >
                <span>
                  {" "}
                  Cameras & Accessories{" "}
                  <i className="fa-regular fa-angle-down"></i>
                </span>

                {navDropdown === 2 && (
                  <LinkDropdown />
                )}
              </li>

              <li
                onMouseEnter={() => setNavDropdown(3)}
                onMouseLeave={() => setNavDropdown(0)}
              >
                <span>
                  {" "}
                  GPS & Car <i className="fa-regular fa-angle-down"></i>
                </span>

                {navDropdown === 3 && (
                  <LinkDropdown />
                )}
              </li>

              <li
                onMouseEnter={() => setNavDropdown(4)}
                onMouseLeave={() => setNavDropdown(0)}
              >
                <span>
                  {" "}
                  Electronics <i className="fa-regular fa-angle-down"></i>
                </span>

                {navDropdown === 4 && (
                  <LinkDropdown />
                )}
              </li>

              <li
                onMouseEnter={() => setNavDropdown(5)}
                onMouseLeave={() => setNavDropdown(0)}
              >
                <span>
                  {" "}
                  Tv & Audio <i className="fa-regular fa-angle-down"></i>
                </span>

                {navDropdown === 5 && (
                  <LinkDropdown />
                )}
              </li>

              <li
                onMouseEnter={() => setNavDropdown(6)}
                onMouseLeave={() => setNavDropdown(0)}
              >
                <span>
                  {" "}
                  Smart Phones <i className="fa-regular fa-angle-down"></i>
                </span>

                {navDropdown === 6 && (
                  <LinkDropdown />
                )}
              </li>
            </ul>
          </div>
        </Container>
      </div>

      {/* SMALL SCREEN SIDE BAR */}
      <MobSidebar
        className={openSidebar ? cls.show : cls.hide}
        isOpen={openSidebar}
        closeMobileMenu={setOpenSidebar}
      />
    </div>
  );
};

export default HeaderThirtyNine;