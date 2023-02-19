import Link from 'next/link';
import { useRouter } from 'next/router';

import LangSwitch from "../../switches/LangSwitch/LangSwitch";
import CurrencySwitch from "../../switches/CurrencySwitch/CurrencySwitch";

import Container from '@mui/material/Container';

import { useTranslation } from 'next-i18next';

import cls from './topHeader.module.scss';

const TopHeader = () => {
  const { t, i18n } = useTranslation('nav')
  const router = useRouter();

  return (
    <div className={cls.topHeader}>
      <Container maxWidth="xl" className={`${cls.wrapper}`}>
        <div className={cls.info}>
          <span>
            <i className="fa-light fa-phone"></i> +2010-2586-4313
          </span>
          <span>
            <i className="fa-light fa-envelope"></i> grids@apps.com
          </span>
        </div>
        <div className={cls.options}>
          <span onClick={() => router.push("/track-order")}>
            <i className="fa-light fa-truck"></i> Track you ship
          </span>
          <span onClick={() => router.push("/account")}>
            <i className="fa-light fa-user"></i>
            <Link href="/register">Register</Link>
            Or
            <Link href="/login">Login</Link>
          </span>
          <LangSwitch color="#fff" />

          <CurrencySwitch />
        </div>
      </Container>
    </div>
  );
}

export default TopHeader;