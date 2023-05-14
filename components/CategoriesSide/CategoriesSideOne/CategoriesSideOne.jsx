import Link from "next/link";
import { useState } from "react";

import { useTranslation } from "next-i18next";

import cls from "./categoriesSideOne.module.scss";

const CategoriesSideOne = ({ classCustome, open, background, scrollTop }) => {
  const [menu, setMenu] = useState(open);
  const { t, i18n } = useTranslation('common');
  const handleMenu = () => {
    setMenu(current => !current)
  }
  return (
    <div className={`${cls.wrapper} ${classCustome ? cls.categoriesAbsolute : ""} ${cls[i18n.language]}`}>
      <h2 className={cls.title} onClick={handleMenu} style={{ backgroundColor: background }}>Top Categories</h2>

      <div className={`${cls.body} ${menu && scrollTop >= 200 ? "" : cls.closed}`}>
        <ul className={cls.sideMenu}>
          <li>
            <Link href="demo2-shop.html">
              <span>
                <i className="far fa-tshirt"></i>Fashion
              </span>
            </Link>
          </li>
          <li>
            <Link href="demo2-shop.html">
              <span>
                <i className="far fa-tachometer-alt-slow"></i>Electronics
              </span>
            </Link>
          </li>
          <li>
            <Link href="demo2-shop.html">
              <span>
                <i className="far fa-gift"></i>Gifts
              </span>
            </Link>
          </li>
          <li>
            <Link href="demo2-shop.html">
              <span>
                <i className="far fa-flower-tulip"></i>Home &amp; Garden
              </span>
            </Link>
          </li>
          <li>
            <Link href="demo2-shop.html">
              <span>
                <i className="far fa-microphone-alt"></i>Music
              </span>
            </Link>
          </li>
          <li>
            <Link href="demo2-shop.html">
              <span>
                <i className="far fa-racquet"></i>Sports
              </span>
            </Link>
          </li>
        </ul>

        <Link href="/" className={cls.btn} style={{ backgroundColor: background }}>
          <span>
            Huge Sale -<strong>70%</strong>
            Off
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CategoriesSideOne;
