import { useState } from "react";

import MiddleHeader from './MiddleHeader';
import LinkDropdown from '../LinkDropdown/LinkDropdown';
import CategoriesSideOne from "../../CategoriesSide/CategoriesSideOne/CategoriesSideOne";
import CartDropdown from "../CartDropdown/CartDropdown";
import WishlistDropdown from "../WishlistDropdown/WishlistDropdown";

import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";

import { useTranslation } from "next-i18next";

import cls from './headerTen.module.scss';
import LangSwitch from "../../switches/LangSwitch/LangSwitch";
import ModeSwitch from "../../switches/ModeSwitch/ModeSwitch";

const HeaderTen = ({ openCategories }) => {
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
            </ul>
          </div>

          <div className={cls.actions}>
            <LangSwitch />
            <ModeSwitch />

            <div className={cls.compare}>
              <Tooltip title="compare" placement="top">
                <span onClick={() => router.push("/compare")}>
                  <i className="fa-regular fa-code-compare"></i>
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
                  <i className="fa-regular fa-heart"></i>
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
                  <i className="fa-regular fa-cart-shopping"></i>{" "}
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

export default HeaderTen;