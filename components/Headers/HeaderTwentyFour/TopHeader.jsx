import Link from 'next/link';

import LangSwitch from "../../switches/LangSwitch/LangSwitch";
import ModeSwitch from "../../switches/ModeSwitch/ModeSwitch";
import CurrencySwitch from "../../switches/CurrencySwitch/CurrencySwitch";

import Container from "@mui/system/Container";

import cls from "./topHeader.module.scss";

const TopHeader = () => {
  return (
    <div className={cls.headerTop}>
      <Container maxWidth="xxl" className={cls.wrapper}>
        <div className={cls.headerLeft}>
          <div>
            <LangSwitch />
          </div>
          <div>
            <CurrencySwitch />
          </div>
          <div>
            <ModeSwitch />
          </div>
        </div>

        <div className={cls.headerRight}>
          <div className={[cls.headerRight, cls.headerDropdowns].join(" ")}>
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
      </Container>
    </div>
  );
};

export default TopHeader;
