/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';

import Tooltip from '@mui/material/Tooltip';

import { useTranslation } from 'next-i18next';

import cls from './productFourtyEight.module.scss';

const MiniProductBox = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.productBox}>

      <div className={[cls.badgesArea, cls[i18n.language]].join(" ")}>
        <div className={`${cls.saleBadge} ${cls[i18n.language]}`}>
          <span>Off</span>
          <p>10%</p>
        </div>
        {/* <div className={`${cls.newBadge} ${cls[i18n.language]}`}>
          <span><i className="fa-regular fa-stars"></i> New</span>
        </div> */}
        {/* <div className={`${cls.special} ${cls[i18n.language]}`}>
          <span>Offer</span>
          <p>5%</p>
        </div> */}
        {/* <div className={`${cls.hot} ${cls[i18n.language]}`}>
          <span>Hot</span>
          <p>20%</p>
        </div> */}
      </div>

      <span className={cls.label}>Electronics</span>

      <h4 className={cls.title} onClick={() => router.push('/product/123')}>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7, 8GB RAM, 1TB HDD</h4>

      <img src="/imgs/products/laptop.png" alt="productImage" />

      <div className={cls.cart}>

        <p>$350</p>

        <div>
          <Tooltip title="Add to compare" placement="top">
            <i className="fa-light fa-code-compare"></i>
          </Tooltip>
          <Tooltip title="Add to wishlist" placement="top">
            <i className="fa-regular fa-heart"></i>
          </Tooltip>
          <Tooltip title="Add to cart" placement="top">
            <i className="fa-regular fa-cart-plus"></i>
          </Tooltip>
        </div>

      </div>

      {/* <div className={cls.quantity}>

        <span>Quantity: <span>200</span></span>

        <span>Solid quantity: <span>0</span></span>

      </div> */}

      {/* <div className={cls.progress}></div> */}

      <div className={cls.actions}>

        <button><i className="fa-light fa-code-compare"></i> {t('product.compare')}</button>

        <button><i className="fa-light fa-heart"></i> {t('product.wishlist')}</button>

      </div>

    </div>
  )
}

export default MiniProductBox;