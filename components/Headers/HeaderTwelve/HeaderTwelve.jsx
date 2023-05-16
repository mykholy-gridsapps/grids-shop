import { useState } from "react";

import MiddleHeader from './MiddleHeader';
import LinkDropdown from '../LinkDropdown/LinkDropdown';
import CategoriesSideOne from "../../CategoriesSide/CategoriesSideOne/CategoriesSideOne";
import CartDropdown from "../CartDropdown/CartDropdown";
import WishlistDropdown from "../WishlistDropdown/WishlistDropdown";
import LangSwitch from "../../switches/LangSwitch/LangSwitch";
import ModeSwitch from "../../switches/ModeSwitch/ModeSwitch";

import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";

import { useTranslation } from "next-i18next";

import cls from './headerTwelve.module.scss';

const HeaderTwelve = ({ openCategories }) => {
  const [navDropdown, setNavDropdown] = useState(0);
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.navbar}>
      <MiddleHeader />

      <div className={cls.navbar__main}>
        <Container maxWidth="xl" className={`${cls.navbar_mainNav}`}>

          <div className={`${cls.links} ${cls[i18n.language]}`}>
            <div className={cls.sideCategories}>
              <CategoriesSideOne classCustome={true} open={openCategories} background={`var(--main-color)`} />
            </div>
            <ul className={`${cls.navLinks} ${cls[i18n.language]}`}>
              <li
                onMouseEnter={() => setNavDropdown(1)}
                onMouseLeave={() => setNavDropdown(0)}
              >
                <i className="fa-light fa-camera-movie"></i>
                <span>
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
                <i className="fa-light fa-camera-movie"></i>
                <span>
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
                <i className="fa-light fa-camera-movie"></i>
                <span>
                  GPS & Car <i className="fa-regular fa-angle-down"></i>
                </span>

                {navDropdown === 3 && (
                  <LinkDropdown />
                )}
              </li>
            </ul>
          </div>

          <div className={cls.actions}>

            <div className={cls.search}>
              <input type="text" placeholder="Search for products" />
              <button><i className="fa-light fa-magnifying-glass"></i></button>
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


        </Container>
      </div>
    </div>
  );
}

export default HeaderTwelve;