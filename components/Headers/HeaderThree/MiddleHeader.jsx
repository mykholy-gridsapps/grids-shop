/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';

import AnimatedIcons from "../../UIs/AnimatedIcons/AnimatedIcons";
import LinkDropdown from '../LinkDropdown/LinkDropdown';

import Container from "@mui/material/Container";

import * as animationData from "../../../public/animated/support.json";

import cls from './middleHeader.module.scss';

const MiddleHeader = () => {
  const router = useRouter()
  const [navDropdown, setNavDropdown] = useState("");

  return (
    <Container maxWidth="xl" className={`${cls.middleHeader}`}>
      <div className={cls.logo}>
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

      <div className={cls.support}>
        <AnimatedIcons animationData={animationData} />

        <div>
          <h6>Support: 01025864313</h6>
          <span>Email: info@tripple.com</span>
        </div>
      </div>
    </Container>
  );
};

export default MiddleHeader;
