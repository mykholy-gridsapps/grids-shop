import Link from 'next/link';
import { i18n, useTranslation } from 'next-i18next';

import LangSwitch from "../../switches/LangSwitch/LangSwitch";
import ModeSwitch from "../../switches/ModeSwitch/ModeSwitch";
import CurrencySwitch from "../../switches/CurrencySwitch/CurrencySwitch";

import Container from "@mui/system/Container";

import cls from "./topHeader.module.scss";


const TopHeader = () => {
  const { t, i18n } = useTranslation('common');
  return (
    <div className={`${cls.headerTop} ${cls[i18n.language]}`}>
      <Container maxWidth="xl" className={cls.wrapper}>
        <div className={cls.headerLeft}>
          <div className={cls.item}>
            <a href="tel:#"> <i class="fa-solid fa-phone"></i> +123 5678 890</a>
          </div>
          <div className={cls.item}>
            <Link href="/account"> <i class="fa-solid fa-envelope"></i> My Account</Link>
          </div>
          <div className={cls.item}>
            <LangSwitch />
          </div>
          <div className={cls.item}>
            <CurrencySwitch />
          </div>
          <div className={cls.item}>
            <ModeSwitch />
          </div>
        </div>

        <div className={cls.headerRight}>
          <div className={[cls.headerRight, cls.headerDropdowns].join(" ")}>
            <ul className={cls.linksList}>

              <li className={cls.item}>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li className={cls.item}>
                <Link href="/wishlist">My Wishlist</Link>
              </li>
              <li className={cls.item}>
                <Link href="/cart">My Cart</Link>
              </li>
              <li className={cls.item}>
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
