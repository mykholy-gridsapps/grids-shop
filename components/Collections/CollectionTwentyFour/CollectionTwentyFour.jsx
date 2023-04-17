import { useState } from 'react';

import ProductEighteen from '../../ProductCard/ProductEighteen/ProductEighteen';

import cls from './collectionTwentyFour.module.scss';

const CollectionTwentyFour = () => {
  const [activeTab, setActiveTab] = useState('NEW ARRIVALS');

  const tabs = [
    "NEW ARRIVALS",
    "BEST SELLER",
    "MOST POPULAR",
    "VIEW ALL"
  ]

  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <h5>Consumer Electronics</h5>
        <div className={cls.tabs}>
          {tabs.map(tab => (
            <span onClick={() => setActiveTab(tab)} className={activeTab === tab ? cls.active : ''}>{tab}</span>
          ))}
        </div>
      </div>
      <div className={cls.products}>
        <div className={cls.big}>
          <ProductEighteen />
        </div>
        <div className={cls.small}>
          <ProductEighteen />
        </div>
        <div className={cls.small}>
          <ProductEighteen />
        </div>
        <div className={cls.small}>
          <ProductEighteen />
        </div>
        <div className={cls.small}>
          <ProductEighteen />
        </div>
        <div className={cls.small}>
          <ProductEighteen />
        </div>
        <div className={cls.small}>
          <ProductEighteen />
        </div>
      </div>
    </div>
  )
}

export default CollectionTwentyFour;
