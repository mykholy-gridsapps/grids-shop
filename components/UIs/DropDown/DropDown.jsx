/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";

import { useTranslation } from "next-i18next";

import Cookies from "universal-cookie";

// STYLES FILES
import cls from "./dropDown.module.scss";

const cookie = new Cookies();

const DropDown = ({ menu, color }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [lang, setLang] = useState(cookie.get("grids-apps-shop-lang"));
  const { i18n } = useTranslation();

  useEffect(() => {
    setLang(cookie.get("grids-apps-shop-lang"));
  }, [cookie.get("grids-apps-shop-lang")]);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };
  
  return (
    <div className={cls.dropdown}>
      {openMenu && <div className={cls.overlay} onClick={handleClose}></div>}

      <img
        src={menu.find((item) => item.param === lang).img}
        alt="flag"
        onClick={handleClick}
      />

      <span onClick={handleClick} style={{ color: color }}>
        {menu.find((item) => item.param === lang).text}
      </span>

      <i
        className="fa-solid fa-angle-down"
        onClick={handleClick}
        style={{ color: color }}
      ></i>

      <Box
        className={`${cls.dropdownMenu} ${openMenu ? cls.show : ""} ${
          cls[i18n.language]
        }`}
      >
        <ul>
          {menu.map((item) => (
            <li
              key={item.option}
              onClick={() => {
                item.method(item.param);
                handleClose();
              }}
            >
              {item.img && (
                <img src={item.img} alt="flag" className={cls.flag} />
              )}
              <p>{item.option}</p>
            </li>
          ))}
        </ul>
      </Box>
    </div>
  );
};

export default DropDown;
