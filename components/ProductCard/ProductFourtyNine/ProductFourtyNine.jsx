/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';

import Rating from '@mui/material/Rating';
import Tooltip from '@mui/material/Tooltip';

import { useTranslation } from 'next-i18next';

import cls from './productFourtyNine.module.scss';

const ProductBox = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.productBox}>
      <div className={cls.layer}></div>
      <div className={[cls.badgesArea, cls[i18n.language]].join(" ")}>
        <div className={`${cls.saleBadge} ${cls.horizontal} ${cls[i18n.language]}`}>
          <span>Off</span>
          <p>10%</p>
        </div>
        {/* <div className={`${cls.newBadge} ${cls.almostRounded} ${cls[i18n.language]}`}>
          <span><i className="fa-regular fa-stars"></i> New</span>
        </div>
        <div className={`${cls.special} ${cls[i18n.language]}`}>
          <span>Offer</span>
          <p>5%</p>
        </div>
        <div className={`${cls.hot} ${cls[i18n.language]}`}>
          <span>Hot</span>
          <p>20%</p>
        </div> */}
      </div>
      <div className={cls.inside}>
        <img src="/imgs/products/laptop.png" alt="productImage" />
        <div className={cls.content}>
          <span className={cls.label}>Electronics</span>
          <h4 className={cls.title} onClick={() => router.push('/product/123')}>Dell Vostro 3500 laptop</h4>
          <div className={cls.cart}>
            <p>$350</p>
            <Tooltip title="Add to cart" placement="top">
              <i className="fa-regular fa-cart-plus"></i>
            </Tooltip>
          </div>
          <div className={cls.footer}>
            <span><i className="fa-light fa-code-compare"></i> Compare</span>
            <span><i className="fa-regular fa-heart"></i> Wishlist</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductBox