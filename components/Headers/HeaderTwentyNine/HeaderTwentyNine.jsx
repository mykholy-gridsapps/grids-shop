/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';

import LinkDropdown from '../LinkDropdown/LinkDropdown';

import Container from "@mui/material/Container";
import { Tooltip } from '@mui/material';
import CartDropdown from '../CartDropdown/CartDropdown';
import WishlistDropdown from '../WishlistDropdown/WishlistDropdown';
import MobSidebar from "../MobSidebar/MobSidebar";

import cls from './headerTwentyNine.module.scss';

const HeaderTwentyNine = () => {
  const router = useRouter()
  const [navDropdown, setNavDropdown] = useState("");
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className={`${cls.header}`}>

      <div className={`${cls.middleHeader}`}>

        <div className={cls.links}>
          <ul>
            <li className={`${router.pathname == "/" ? cls.active : ""}`}>
              <Link href="/">
                Home
              </Link>
            </li>

            <li className={`${router.pathname == "/about" ? cls.active : ""}`}>
              <Link href="/about">About</Link>
            </li>

            <li className={`${router.pathname == "/blogs" ? cls.active : ""}`}>
              <Link href="/">Blogs</Link>
            </li>

            <li
              className={`${router.pathname == "/pages" ? cls.active : ""}`}
              onMouseEnter={() => setNavDropdown("pages")}
              onMouseLeave={() => setNavDropdown("")}
            >
              <Link href="/">
                <span>
                  Pages <i className="fa-solid fa-angle-down"></i>
                </span>
              </Link>

              {navDropdown === "pages" && <LinkDropdown />}
            </li>

            <li className={`${router.pathname == "/policy" ? cls.active : ""}`}>
              <Link href="/policy">Policy</Link>
            </li>

            <li className={`${router.pathname == "/contact" ? cls.active : ""}`}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className={cls.logo}>
          <i
            className="fa-light fa-grid-2"
            onClick={() => setOpenSidebar(!openSidebar)}
          ></i>{" "}
          <Link href="/">
            <img
              className={cls.bigImage}
              src="./imgs/logos/coloredSmallLogo.png"
              alt="tripple-shop-logo"
            />
          </Link>
        </div>

        <div className={cls.navbar__search__account}>
          <Link href='/'>
            LOGIN / REGISTER
          </Link>
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
                <span className={cls.cartAmount}>$0.00</span>
              </span>
            </Tooltip>

            {navDropdown === "cart" && <CartDropdown />}
          </div>
        </div>

      </div>
      <MobSidebar
        className={openSidebar ? cls.show : cls.hide}
        isOpen={openSidebar}
        closeMobileMenu={setOpenSidebar}
      />
    </div>
  );
};

export default HeaderTwentyNine;
