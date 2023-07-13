import { useState } from "react";

import Container from "@mui/material/Container";

import MiddleHeader from './MiddleHeader';
import TopHeader from './TopHeader';
import LinkDropdown from '../LinkDropdown/LinkDropdown';
import CategoriesSideTwo from "../../CategoriesSide/CategoriesSideTwo/CategoriesSideTwo";
import AnimatedIcons from "./../../UIs/AnimatedIcons/AnimatedIcons";

import { useTranslation } from "next-i18next";

import * as animationData from "../../../public/animated/call2.json";

import cls from './headerNine.module.scss';

const HeaderNine = ({ openCategories }) => {
  const [navDropdown, setNavDropdown] = useState(0);
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.navbar}>
      <TopHeader />
      <MiddleHeader />

      <div className={cls.navbar__main}>
        <div className={`${cls.navbar_mainNav}`}>

          <div className={`${cls.links} ${cls[i18n.language]}`}>
            <div className={cls.sideCategories}>
              <CategoriesSideTwo classCustome={true} open={openCategories} background={`var(--main-color)`} />
            </div>
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

          <div className={cls.contact}>
            <AnimatedIcons animationData={animationData} />
            <div>
              <h6>1900-888</h6>
              <span>24/7 support center</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderNine;