/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';

import LinkDropdown from '../LinkDropdown/LinkDropdown';
import TopHeader from './TopHeader';

import Container from "@mui/material/Container";
import { Tooltip } from '@mui/material';
import CartDropdown from '../CartDropdown/CartDropdown';
import WishlistDropdown from '../WishlistDropdown/WishlistDropdown';
import MobSidebar from "../MobSidebar/MobSidebar";

import { useTranslation } from 'next-i18next';

import cls from './headerFourty.module.scss';

const HeaderFourty = () => {
  const router = useRouter()
  const [navDropdown, setNavDropdown] = useState("");
  const [openSidebar, setOpenSidebar] = useState(false);
  const { i18n } = useTranslation('common');

  return (
    <div className={`${cls.header}`}>
      <TopHeader />

      <Container maxWidth="xxl" className={`${cls.middleHeader}`}>
        <div className={cls.logo}>
          <i
            className="fa-light fa-grid-2"
            onClick={() => setOpenSidebar(!openSidebar)}
          ></i>{" "}
          <Link href="/">
            <img
              className={cls.bigImage}
              src="./imgs/logos/coloredLogo.png"
              alt="tripple-shop-logo"
            />
          </Link>

          <div
            className={`${cls.navbar__search__searchArea} ${cls[i18n.language]}`}
          >
            <input type="text" placeholder="Search for products" />

            <select name="" id="">
              <option value="" disabled selected>Select Option</option>
              <option value="All">All</option>
              <option value="Featured">Featured</option>
              <option value="Featured">Featured</option>
              <option value="Featured">Featured</option>
              <option value="Featured">Featured</option>
              <option value="Featured">Featured</option>
              <option value="Featured">Featured</option>
            </select>

            <button>
              <i className="fa-light fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

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

            <li className={`${router.pathname == "/contact" ? cls.active : ""}`}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
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
                <span className={cls.cartAmount}>$0.00</span>
              </span>
            </Tooltip>

            {navDropdown === "cart" && <CartDropdown />}
          </div>
        </div>
      </Container>
      <MobSidebar
        className={openSidebar ? cls.show : cls.hide}
        isOpen={openSidebar}
        closeMobileMenu={setOpenSidebar}
      />
    </div>
  );
};

export default HeaderFourty;
