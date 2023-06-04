import { useState } from "react";
import Link from "next/link";

import Container from "@mui/material/Container";

import MiddleHeader from './MiddleHeader';
import TopHeader from './TopHeader';
import LinkDropdown from '../LinkDropdown/LinkDropdown';
import CategoriesSideTwo from "../../CategoriesSide/CategoriesSideTwo/CategoriesSideTwo";

import { useTranslation } from "next-i18next";

import cls from './headerThirtyTwo.module.scss';

const HeaderThirtyTwo = ({ openSideCategories }) => {
  const [navDropdown, setNavDropdown] = useState(0);
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.navbar}>
      <TopHeader />
      <MiddleHeader />
    </div>
  );
}

export default HeaderThirtyTwo;