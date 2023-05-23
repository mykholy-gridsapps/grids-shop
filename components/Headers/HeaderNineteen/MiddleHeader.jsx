/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from "react";

import AnimatedIcons from "./../../UIs/AnimatedIcons/AnimatedIcons";
import CartDropdown from "../CartDropdown/CartDropdown";
import WishlistDropdown from "../WishlistDropdown/WishlistDropdown";
import MobSidebar from "../MobSidebar/MobSidebar";
import SmallScreenSearch from '../SmallScreenSearch/SmallScreenSearch';

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";

import * as animationData from "../../../public/animated/call2.json";

import cls from "./middleHeader.module.scss";

const MiddleHeader = () => {
  const [navDropdown, setNavDropdown] = useState(0);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSmallSearch, setOpenSmallSearch] = useState(false);
  const router = useRouter();

  return (
    <div className={cls.headerMiddle}>
      <Container maxWidth="xl">
        <div className={cls.wrapper}>
          <div className={cls.headerLeft}>
            <div className={cls.headerContact}>
              <AnimatedIcons animationData={animationData} />
              <div className={cls.contactInfo}>
                <h6>Call us now</h6>
                <a href="tel:#">+123 5678 890</a>
              </div>
            </div>
          </div>

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

          <div className={cls.headerRight}>

            <div className={cls.navbar__main__account}>
              <div className={cls.search} onClick={() => setOpenSmallSearch(prev => !prev)}>
                <span>
                  <i className="fa-light fa-magnifying-glass"></i>
                </span>
              </div>

              <span className={cls.register}>
                LOGIN / REGISTER
              </span>

              <div className={cls.compare}>
                <Tooltip title="compare" placement="top">
                  <span onClick={() => router.push("/compare")}>
                    <i className="fa-light fa-code-compare"></i>
                  </span>
                </Tooltip>
              </div>

              <div className={cls.wishlist}
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
