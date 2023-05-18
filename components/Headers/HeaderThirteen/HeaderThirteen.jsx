/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState } from "react";

import MobSidebar from "../MobSidebar/MobSidebar";
import SmallScreenSearch from '../SmallScreenSearch/SmallScreenSearch';
import LinkDropdown from '../LinkDropdown/LinkDropdown';
import CartDropdown from "../CartDropdown/CartDropdown";
import WishlistDropdown from "../WishlistDropdown/WishlistDropdown";

import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";

import { useTranslation } from "next-i18next";


import cls from "./headerThirteen.module.scss";

const MiddleHeader = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSmallSearch, setOpenSmallSearch] = useState(false);
  const [navDropdown, setNavDropdown] = useState(0);
  const { t, i18n } = useTranslation('common');

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
        </div>

        <div className={`${cls.links} ${cls[i18n.language]}`}>
          <ul className={`${cls.navLinks} ${cls[i18n.language]}`}>
            <li
              onMouseEnter={() => setNavDropdown(1)}
              onMouseLeave={() => setNavDropdown(0)}
            >
              <i className="fa-light fa-camera-movie"></i>
              <span>
                Games <i className="fa-regular fa-angle-down"></i>
              </span>

              {navDropdown === 1 && (
                <LinkDropdown />
              )}
            </li>

            <li
              onMouseEnter={() => setNavDropdown(2)}
              onMouseLeave={() => setNavDropdown(0)}
            >
              <i className="fa-light fa-camera-movie"></i>
              <span>
                Accessories{" "}
                <i className="fa-regular fa-angle-down"></i>
              </span>

              {navDropdown === 2 && (
                <LinkDropdown />
              )}
            </li>

            <li
              onMouseEnter={() => setNavDropdown(2)}
              onMouseLeave={() => setNavDropdown(0)}
            >
              <i className="fa-light fa-camera-movie"></i>
              <span>
                Cameras{" "}
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
              <i className="fa-light fa-camera-movie"></i>
              <span>
                Appliances <i className="fa-regular fa-angle-down"></i>
              </span>

              {navDropdown === 3 && (
                <LinkDropdown />
              )}
            </li>
          </ul>
        </div>

        <div className={cls.headerRight}>

          <div className={cls.auth}>
            <Link href="/login">
              Login/Register
            </Link>
          </div>

          <div className={cls.navbar__main__account}>
            <div className={cls.search} onClick={() => setOpenSmallSearch(prev => !prev)}>
              <span>
                <i className="fa-light fa-magnifying-glass"></i>
              </span>
            </div>
          </div>

          <div className={cls.actions}>

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

              <span className={cls.num}>3</span>

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
                </span>
              </Tooltip>

              <span className={cls.num}>5</span>

              {navDropdown === "cart" && <CartDropdown />}
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
