import { useState } from "react";
import Link from "next/link";

import Container from "@mui/material/Container";

import LinkDropdown from '../LinkDropdown/LinkDropdown';
import CategoriesSideTwo from "../../CategoriesSide/CategoriesSideTwo/CategoriesSideTwo";

import { useTranslation } from "next-i18next";

import cls from './bottomHeader.module.scss';

const BottomHeader = () => {
  const [navDropdown, setNavDropdown] = useState(0);
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.navbar}>

      <div className={cls.navbar__main}>
        <Container maxWidth="xxl" className={`${cls.navbar_mainNav}`}>
          <div className={cls.smallLogo}>
            <i
              className="fa-light fa-grid-2"
              onClick={() => setOpenSidebar(!openSidebar)}
            ></i>{" "}
            <h5>Grids Apps</h5>
          </div>

          <div className={`${cls.links} ${cls[i18n.language]}`}>
            <div className={cls.sideCategories}>
              <CategoriesSideTwo classCustome={true} open={false} />
            </div>
            <ul className={`${cls.navLinks} ${cls[i18n.language]}`}>
              <li
                onMouseEnter={() => setNavDropdown(1)}
                onMouseLeave={() => setNavDropdown(0)}
              >
                <span>
                  {" "}
                  Games <i className="fa-regular fa-angle-down"></i>
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
                  Accessories{" "}
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
                  Car <i className="fa-regular fa-angle-down"></i>
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

              <li
                onMouseEnter={() => setNavDropdown(4)}
                onMouseLeave={() => setNavDropdown(0)}
              >
                <span>
                  {" "}
                  Appliances <i className="fa-regular fa-angle-down"></i>
                </span>

                {navDropdown === 4 && (
                  <LinkDropdown />
                )}
              </li>
            </ul>
          </div>

          <div className={cls.entry}>
            <i className="fa-duotone fa-ribbon"></i>
            <h6>SPECIAL OFFER</h6>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default BottomHeader;