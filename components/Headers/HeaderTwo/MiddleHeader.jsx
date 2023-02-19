/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import AnimatedIcons from "../../UIs/AnimatedIcons/AnimatedIcons";

import Container from "@mui/material/Container";

import { useTranslation } from 'next-i18next';

import * as animationData from "../../../public/animated/support.json";

import cls from './middleHeader.module.scss';

const MiddleHeader = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <Container maxWidth="xl" className={`${cls.search__wrapper}`}>
      <div className={cls.logo}>
        <Link href='/'>
          <img
            className={cls.bigImage}
            src="./imgs/logos/coloredLogo.png"
            alt="tripple-shop-logo"
          />
        </Link>
      </div>

      <div
        className={`${cls.navbar__search__searchArea} ${cls.rounded} ${
          cls[i18n.language]
        }`}
      >
        <input type="text" placeholder="Search" />

        <button>
          <i className="fa-light fa-magnifying-glass"></i>
        </button>
      </div>

      <div className={cls.support}>
        <AnimatedIcons animationData={animationData} />

        <div>
          <h6>Support: 01025864313</h6>
          <span>Email: info@tripple.com</span>
        </div>
      </div>
    </Container>
  );
}

export default MiddleHeader