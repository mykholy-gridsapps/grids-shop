import Link from 'next/link';

import LangSwitch from "../../switches/LangSwitch/LangSwitch";
import ModeSwitch from "../../switches/ModeSwitch/ModeSwitch";
import CurrencySwitch from "../../switches/CurrencySwitch/CurrencySwitch";

import cls from "./topHeader.module.scss";

const TopHeader = () => {
  return (
    <div className={cls.headerTop}>
      <div className={cls.wrapper}>

        <div className={cls.headerLeft}>
          <p className={cls.topMessage}><i className="fa-solid fa-envelope"></i> info@emallshop.com</p>
          <p className={cls.topMessage}><i className="fa-solid fa-phone"></i> +81 59832452528</p>
        </div>

        <div className={cls.shipTip}>
          <p>Free shipping for all orders over <span>$75.00</span></p>
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

            <div className={cls.switches}>
              <LangSwitch />
              <CurrencySwitch />
            </div>
            <ModeSwitch />
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopHeader;
