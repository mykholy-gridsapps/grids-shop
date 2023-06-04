import Link from 'next/link';

import LangSwitch from "../../switches/LangSwitch/LangSwitch";
import ModeSwitch from "../../switches/ModeSwitch/ModeSwitch";
import CurrencySwitch from "../../switches/CurrencySwitch/CurrencySwitch";

import Container from "@mui/system/Container";

import cls from "./topHeader.module.scss";
import { Tooltip } from '@mui/material';
import WishlistDropdown from '../WishlistDropdown/WishlistDropdown';
import CartDropdown from '../CartDropdown/CartDropdown';
import { useState } from 'react';

const TopHeader = () => {
  const [navDropdown, setNavDropdown] = useState("");

  return (
    <div className={cls.headerTop}>
      <Container maxWidth="xl" className={cls.wrapper}>
        <div className={cls.headerLeft}>
          <div>
            <LangSwitch />
          </div>
          <div>
            <CurrencySwitch />
          </div>
          <div className={cls.headerDropdowns}>
            <ul className={cls.linksList}>
              <li>
                <Link href="/account">My Account</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/wishlist">My Wishlist</Link>
              </li>
              <li>
                <Link href="/cart">My Cart</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={cls.headerRight}>
          <div className={cls.contactLink}>
            <i className="fa-regular fa-phone"></i>
            <h6>
              <a href="tel:#" class="d-block">+123 5678 890</a>
            </h6>
          </div>

          <div className={cls.navbar__search__account}>
            <div className={cls.search} onClick={() => setOpenSmallSearch(prev => !prev)}>
              <span>
                <i className="fa-light fa-magnifying-glass"></i>
              </span>
            </div>
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

              {navDropdown === "cart" && <CartDropdown />}
            </div>
          </div>

          <div>
            <ModeSwitch />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
