import Link from 'next/link';
import React from 'react';

import { useTranslation } from 'next-i18next';

import cls from './categories.module.scss';

const Categories = () => {
  const { i18n } = useTranslation('common')

  return (
    <div className={cls.categories}>
      <h4>Computers & Technologies</h4>
      <p>Everything you need for repairs in one place</p>
      <ul>
        <li><i className="fa-light fa-desktop"></i> Desktop PC</li>
        <li><i className="fa-light fa-desktop"></i> Headphones</li>
        <li><i className="fa-light fa-desktop"></i> Laptops</li>
        <li><i className="fa-light fa-desktop"></i> Desktop PC</li>
        <li><i className="fa-light fa-desktop"></i> Headphones</li>
        <li><i className="fa-light fa-desktop"></i> Laptops</li>
      </ul>

      <Link href="/">
        Browse All <i className={`fa-solid fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'}-long`}></i>
        <span></span>
      </Link>
    </div>
  )
}

export default Categories
