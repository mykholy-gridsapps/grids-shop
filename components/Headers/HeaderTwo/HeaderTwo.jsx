/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useRouter } from "next/router";

import TopHeader from './TopHeader';
import MiddleHeader from "./MiddleHeader";
import LinkDropdown from '../LinkDropdown/LinkDropdown';
import CartDropdown from "../CartDropdown/CartDropdown";
import WishlistDropdown from "../WishlistDropdown/WishlistDropdown";
import LangSwitch from "../../switches/LangSwitch/LangSwitch";
import ModeSwitch from "../../switches/ModeSwitch/ModeSwitch";
import MobSidebar from "../MobSidebar/MobSidebar";

import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";

import { useTranslation } from "next-i18next";

import cls from "./headerTwo.module.scss";

const Navbar = ({ rounded }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [navDropdown, setNavDropdown] = useState(0);
  const router = useRouter();
  const { t, i18n } = useTranslation("nav");

  return (
    <div className={cls.navbar}>
      <TopHeader />

      <MiddleHeader />

      <div className={cls.navbar__main}>
        <Container maxWidth="xl" className={`${cls.navbar_mainNav}`}>
          <div className={cls.smallLogo}>
            <i
              className="fa-light fa-grid-2"
              onClick={() => setOpenSidebar(!openSidebar)}
            ></i>{" "}
            <h5>{t("nav.logo")}</h5>
          </div>

          <div className={cls.switches}>
            <LangSwitch color="#fff" />

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
                  <div className={cls.pagesDropdown}>
                    <LinkDropdown />
                  </div>
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
                  <div className={cls.pagesDropdown}>
                    <LinkDropdown />
                  </div>
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
                  <div className={cls.pagesDropdown}>
                    <LinkDropdown />
                  </div>
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
                  <div className={cls.pagesDropdown}>
                    <LinkDropdown />
                  </div>
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
                  <div className={cls.pagesDropdown}>
                    <LinkDropdown />
                  </div>
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
                  <div className={cls.pagesDropdown}>
                    <LinkDropdown />
                  </div>
                )}
              </li>
            </ul>
          </div>

          <div className={cls.navbar__main__account}>
            <div className={cls.account}>
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

export default Navbar;
