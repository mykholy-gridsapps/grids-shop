import Link from "next/link";
import { useState } from "react";

import MiddleHeader from './MiddleHeader';
import TopHeader from './TopHeader';
import LinkDropdown from '../LinkDropdown/LinkDropdown';
import CategoriesSideTwo from "../../CategoriesSide/CategoriesSideTwo/CategoriesSideTwo";

import { useTranslation } from "next-i18next";

import Container from '@mui/material/Container';

import cls from './headerTwentySix.module.scss';

const HeaderTwentySix = ({ openCategories }) => {
  const [navDropdown, setNavDropdown] = useState(0);
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.navbar}>
      <TopHeader />
      <MiddleHeader />

      <div className={cls.navbar__main}>
        <div className={`${cls.navbar_mainNav}`}>
          <Container maxWidth="xxl" className={cls.wrapper}>

            <div className={cls.side}>

              <div className={cls.sideCategories}>
                <CategoriesSideTwo open={openCategories} />
              </div>

              <div className={`${cls.links} ${cls[i18n.language]}`}>
                <ul className={`${cls.navLinks} ${cls[i18n.language]}`}>
                  <li
                    onMouseEnter={() => setNavDropdown(1)}
                    onMouseLeave={() => setNavDropdown(0)}
                  >
                    <span>
                      {" "}
                      Movies & Games <i className="fa-regular fa-angle-down"></i>
                    </span>

                    {navDropdown === 1 && (
                      <LinkDropdown />
                    )}
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
                      GPS & Car <i className="fa-regular fa-angle-down"></i>
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
                      Electronics <i className="fa-regular fa-angle-down"></i>
                    </span>

                    {navDropdown === 4 && (
                      <LinkDropdown />
                    )}
                  </li>
                </ul>
              </div>

            </div>

            <div className={cls.details}>
              <p><i className="fa-sharp fa-light fa-location-dot"></i> Palastine, Ramallah</p>
              <p><i className="fa-light fa-phone"></i> 4455667788</p>
            </div>

          </Container>

        </div>
      </div>
    </div >
  );
}

export default HeaderTwentySix;