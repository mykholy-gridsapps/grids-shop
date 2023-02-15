/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import { useTranslation } from 'next-i18next';

import cls from './categoriesCard.module.scss';

const CategoriesCard = () => {
  const subCategories = [
    {
      name: 'Apple Watch',
      image: '/imgs/products/headphone.png',
      price: '300'
    },
    {
      name: 'Iphone 14',
      image: '/imgs/products/play.png',
      price: '200'
    },
    {
      name: 'Apple Watch',
      image: '/imgs/products/headphone.png',
      price: '300'
    },
    {
      name: 'Iphone 14',
      image: '/imgs/products/play.png',
      price: '200'
    },
    {
      name: 'Apple Watch',
      image: '/imgs/products/headphone.png',
      price: '300'
    },
    {
      name: 'Iphone 14',
      image: '/imgs/products/play.png',
      price: '200'
    },
    {
      name: 'Apple Watch',
      image: '/imgs/products/headphone.png',
      price: '300'
    }
  ]
  const [activeCategory, setActiveCategory] = useState(subCategories[0])
  const { t, i18n } = useTranslation('common');

  

  return (
    <div className={cls.singleCategory}>
      <h5>Apple Accessories</h5>

      <div className={cls.wrapper}>
        <p>
          For iPhone 14 Plus Candy Color Wave TPU Clear PC Phone
          Case(Yellow)
        </p>

        <div className={cls.subCats}>
          <div className={`${cls.subCatsList} ${cls[i18n.language]}`}>
            <ul>
              {subCategories.map((cat, idx) => (
                <li key={idx} onMouseEnter={() => setActiveCategory(cat)}>{cat.name}</li>
              ))}
            </ul>
          </div>

          <div className={cls.img}>
            <img
              src={activeCategory.image}
              alt="productImage"
              className={cls.mainImage}
            />
            <h5>
              <p>Only: </p> <span>${activeCategory.price}</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesCard