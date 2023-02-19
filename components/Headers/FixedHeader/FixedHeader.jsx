/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import CartDropdown from "../CartDropdown/CartDropdown";
import LangSwitch from "../../switches/LangSwitch/LangSwitch";
import CurrencySwitch from "../../switches/CurrencySwitch/CurrencySwitch";
import LinkDropdown from './../LinkDropdown/LinkDropdown';

import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";

import cls from './fixedHeader.module.scss';

const FixedHeader = ({ setOpenSidebar }) => {
  const router = useRouter();
  const [navDropdown, setNavDropdown] = useState("");
  const [scrollTop, setScrollTop] = useState(0);
  
  const handleScroll = () => {
    setScrollTop(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div
      className={[cls.fixedHeader, scrollTop >= 200 ? cls.showNav : ""].join(
        " "
      )}
    >
      <Container maxWidth="xl" className={cls.wrapper}>
        <div className={cls.smallLogo}>
          <i
            className="fa-light fa-grid-2"
            onClick={() => setOpenSidebar((prev) => !prev)}
          ></i>{" "}
          <Link href="/">
            <img
              className={cls.smallImage}
              src="./imgs/logos/whiteSmallLogo.png"
              alt="tripple-shop-logo"
            />
          </Link>
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

            <li className={`${router.pathname == "/policy" ? cls.active : ""}`}>
              <Link href="/policy">Policy</Link>
            </li>

            <li
              className={`${router.pathname == "/contact" ? cls.active : ""}`}
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={cls.switches}>
          <CurrencySwitch />
          <LangSwitch color="#fff" />

          <div
            className={cls.cart}
            onMouseEnter={() => setNavDropdown("cart")}
            onMouseLeave={() => setNavDropdown("")}
          >
            <Tooltip title="Cart" placement="top">
              <span onClick={() => router.push("/cart")}>
                <i className="fa-light fa-cart-shopping"></i> <span>$0.00</span>
              </span>
            </Tooltip>

            {navDropdown === "cart" && <CartDropdown />}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FixedHeader