/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';

import LinkDropdown from '../LinkDropdown/LinkDropdown';

import Container from "@mui/material/Container";
import MobSidebar from "../MobSidebar/MobSidebar";
import TopHeader from './TopHeader';



import cls from './headerThirtyThree.module.scss';

const HeaderThirtyThree = () => {
  const router = useRouter()
  const [navDropdown, setNavDropdown] = useState("");
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className={`${cls.header}`}>
      <TopHeader />
      <Container maxWidth="xl" className={cls.middleHeader}>

        <div className={cls.links}>
          <ul>
            <li className={`${router.pathname == "/" ? cls.active : ""}`}>
              <Link href="/">
                Home
              </Link>
            </li>

            <li className={`${router.pathname == "/about" ? cls.active : ""}`}>
              <Link href="/about">About</Link>
            </li>

            <li className={`${router.pathname == "/blogs" ? cls.active : ""}`}>
              <Link href="/">Blogs</Link>
            </li>
          </ul>
        </div>

        <div className={cls.logo}>
          <i
            className="fa-light fa-grid-2"
            onClick={() => setOpenSidebar(!openSidebar)}
          ></i>{" "}
          <Link href="/">
            <img
              className={cls.bigImage}
              src="./imgs/logos/coloredLogo.png"
              alt="tripple-shop-logo"
            />
          </Link>
        </div>

        <div className={cls.links}>
          <ul>
            <li
              className={`${router.pathname == "/pages" ? cls.active : ""}`}
              onMouseEnter={() => setNavDropdown("pages")}
              onMouseLeave={() => setNavDropdown("")}
            >
              <Link href="/">
                <span>
                  Pages <i className="fa-solid fa-angle-down"></i>
                </span>
              </Link>

              {navDropdown === "pages" && <LinkDropdown />}
            </li>

            <li className={`${router.pathname == "/policy" ? cls.active : ""}`}>
              <Link href="/policy">Policy</Link>
            </li>

            <li className={`${router.pathname == "/contact" ? cls.active : ""}`}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </Container>
      <MobSidebar
        className={openSidebar ? cls.show : cls.hide}
        isOpen={openSidebar}
        closeMobileMenu={setOpenSidebar}
      />
    </div>
  );
};

export default HeaderThirtyThree;
