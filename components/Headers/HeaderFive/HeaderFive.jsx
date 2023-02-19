import { useState } from 'react';

import MiddleHeader from './MiddleHeader';
import TopHeader from './TopHeader';

import LinkDropdown from "../LinkDropdown/LinkDropdown";
import ModeSwitch from "../../switches/ModeSwitch/ModeSwitch";

import Container from "@mui/material/Container";

import { useTranslation } from "next-i18next";

import cls from './headerFive.module.scss';

const HeaderFive = () => {
    const [navDropdown, setNavDropdown] = useState(0);
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.navbar}>
      <TopHeader />
      <MiddleHeader />

      <div className={cls.navbar__main}>
        <Container maxWidth="xl" className={`${cls.navbar_mainNav}`}>
          <div className={cls.links}>
            <ul className={`${cls.navLinks} ${cls[i18n.language]}`}>
              <li
                onMouseEnter={() => setNavDropdown(1)}
                onMouseLeave={() => setNavDropdown(0)}
              >
                <span>
                  {" "}
                  Movies & Games <i className="fa-regular fa-angle-down"></i>
                </span>

                {navDropdown === 1 && <LinkDropdown />}
              </li>

              <li
                onMouseEnter={() => setNavDropdown(2)}
                onMouseLeave={() => setNavDropdown(0)}
              >
                <span>
                  {" "}
                  Cameras & Accessories{" "}
                  <i className="fa-regular fa-angle-down"></i>
                </span>

                {navDropdown === 2 && <LinkDropdown />}
              </li>

              <li
                onMouseEnter={() => setNavDropdown(3)}
                onMouseLeave={() => setNavDropdown(0)}
              >
                <span>
                  {" "}
                  GPS & Car <i className="fa-regular fa-angle-down"></i>
                </span>

                {navDropdown === 3 && <LinkDropdown />}
              </li>

              <li
                onMouseEnter={() => setNavDropdown(4)}
                onMouseLeave={() => setNavDropdown(0)}
              >
                <span>
                  {" "}
                  Electronics <i className="fa-regular fa-angle-down"></i>
                </span>

                {navDropdown === 4 && <LinkDropdown />}
              </li>

              <li
                onMouseEnter={() => setNavDropdown(5)}
                onMouseLeave={() => setNavDropdown(0)}
              >
                <span>
                  {" "}
                  Tv & Audio <i className="fa-regular fa-angle-down"></i>
                </span>

                {navDropdown === 5 && <LinkDropdown />}
              </li>

              <li
                onMouseEnter={() => setNavDropdown(6)}
                onMouseLeave={() => setNavDropdown(0)}
              >
                <span>
                  {" "}
                  Smart Phones <i className="fa-regular fa-angle-down"></i>
                </span>

                {navDropdown === 6 && <LinkDropdown />}
              </li>
            </ul>
          </div>
          <div className={cls.switches}>
            <ModeSwitch />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default HeaderFive