import { useState } from "react";

import { Container } from "@mui/material";
import ModeSwitch from "../../switches/ModeSwitch/ModeSwitch";
import LangSwitch from "../../switches/LangSwitch/LangSwitch";
import CurrencySwitch from "../../switches/CurrencySwitch/CurrencySwitch";
import Link from "next/link";
import LinkDropdown from '../LinkDropdown/LinkDropdown';

import { useTranslation } from "next-i18next";


import cls from "./topHeader.module.scss";

const TopHeader = () => {

  const [navDropdown, setNavDropdown] = useState(0);
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.navbar__main}>
      <Container maxWidth="xl" className={`${cls.navbar_mainNav}`}>
        <div className={cls.headerLeft}>

          <p className={cls.topMessage}>
            Get 10% OFF at the Porto Fashion Selection - <Link href="#">Shop Now!</Link>
          </p>
        </div>

        <div className={cls.links}>
          <ul className={`${cls.navLinks} ${cls[i18n.language]}`}>
            <li className={cls.active}>
              <span>
                HOME
              </span>
            </li>

            <li
              onMouseEnter={() => setNavDropdown(2)}
              onMouseLeave={() => setNavDropdown(0)}
            >
              <span>
                CATEGORIES{" "}<i className="fa-regular fa-angle-down"></i>
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
                PRODUCTS <i className="fa-regular fa-angle-down"></i>
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
                PAGES <i className="fa-regular fa-angle-down"></i>
              </span>

              {navDropdown === 4 && (
                <LinkDropdown />
              )}
            </li>

            <li>
              <span>
                {" "}
                BLOG
              </span>
            </li>
          </ul>
          <div className={cls.switch}>
            <LangSwitch />
          </div>
          <div className={cls.switch}>
            <CurrencySwitch />
          </div>
          <div className={cls.switch}>
            <ModeSwitch />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
