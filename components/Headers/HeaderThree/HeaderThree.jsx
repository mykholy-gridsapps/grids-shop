/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import TopHeader from "./TopHeader";
import HeaderThreeMiddle from "./MiddleHeader";
import CartDropdown from "../CartDropdown/CartDropdown";
import WishlistDropdown from "../WishlistDropdown/WishlistDropdown";
import LangSwitch from "../../switches/LangSwitch/LangSwitch";
import ModeSwitch from "../../switches/ModeSwitch/ModeSwitch";
import MobSidebar from "../MobSidebar/MobSidebar";

import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";

import { useTranslation } from "next-i18next";

import cls from "./headerThree.module.scss";

const Navbar = ({ rounded }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [navDropdown, setNavDropdown] = useState("");
  const router = useRouter();
  const { t, i18n } = useTranslation("nav");

  return (
    <div className={cls.navbar}>

      <TopHeader />

      <HeaderThreeMiddle />

      <div className={cls.navbar__search}>
        <Container maxWidth="xl" className={`${cls.search__wrapper}`}>
          <div className={cls.smallLogo}>
            <i
              className="fa-light fa-grid-2"
              onClick={() => setOpenSidebar(!openSidebar)}
            ></i>{" "}
            <h5>Grids Apps</h5>
          </div>

          <div className={cls.switches}>
            <LangSwitch color="#fff" />

            <ModeSwitch />
          </div>

          <div
            className={`${cls.navbar__search__searchArea} ${cls.rounded} ${
              rounded ? cls.rounded : ""
            } ${cls[i18n.language]}`}
          >
            <input type="text" placeholder="search" />

            <button>
              <i className="fa-light fa-magnifying-glass"></i>
            </button>
          </div>

          <div className={cls.navbar__search__account}>
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
