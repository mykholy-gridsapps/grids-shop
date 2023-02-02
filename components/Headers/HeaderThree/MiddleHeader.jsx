import { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';

import Container from "@mui/material/Container";

import cls from './middleHeader.module.scss';

const MiddleHeader = () => {
  const router = useRouter()
  const [navDropdown, setNavDropdown] = useState("");

  return (
    <Container maxWidth="xxl" className={`${cls.middleHeader}`}>
      <div className={cls.logo}>
        <h1 onClick={() => router.push("/")}>Grids Apps</h1>
      </div>

      <div className={cls.links}>
        <ul>
          <li className={`${router.pathname == "/" ? cls.active : ""}`}>
            <Link href="/" exact>
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
                Pages <i className="fa-light fa-caret-down"></i>
              </span>
            </Link>

            {navDropdown === "pages" && (
              <div className={cls.pagesDropdown}></div>
            )}
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
        <i className="fa-thin fa-hands-holding-heart"></i>

        <div>
          <h6>Support: 01025864313</h6>
          <span>Email: info@tripple.com</span>
        </div>
      </div>
    </Container>
  );
};

export default MiddleHeader;
