import Link from "next/link";
import { useState } from "react";

import MiddleHeader from './MiddleHeader';
import TopHeader from './TopHeader';
import LinkDropdown from '../LinkDropdown/LinkDropdown';
import CategoriesSideTwo from "../../CategoriesSide/CategoriesSideTwo/CategoriesSideTwo";

import { useTranslation } from "next-i18next";

import Container from '@mui/material/Container';

import cls from './headerTwentyFive.module.scss';

const HeaderTwentyFive = ({ openCategories }) => {
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

              <CategoriesSideTwo open={openCategories} />

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

            <div className={cls.actions}>

              <Link href="/">
                Login / Register
              </Link>

              <div className={cls.wishlist}>
                <span><i className="fa-light fa-heart"></i> WISHLIST</span>
                <span className={`${cls.num} ${cls[i18n.language]}`}>2</span>
              </div>

              <div className={cls.compare}>
                <span><i className="fa-light fa-code-compare"></i> COMPARE</span>
                <span className={`${cls.num} ${cls[i18n.language]}`}>3</span>
              </div>

            </div>

          </Container>

        </div>
      </div>
    </div >
  );
}

export default HeaderTwentyFive;