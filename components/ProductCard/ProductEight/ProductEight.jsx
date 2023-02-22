// NEXT STUFF
import { useState } from 'react';
// COMPONENTS
import QuickView from '../QuickView/QuickView';

import cls from './productEight.module.scss'

const ProductEight = () => {
    const [openQuickView, setOpenQuickView] = useState(false);

    return (
        <div className={cls.productDefault}>
            <figure>
                <a href="demo1-product.html">
                    <img src="./imgs/product-1.jpg" width="205" height="205"
                        alt="product" />
                    <img src="./imgs/product-1-2.jpg" width="205"
                        height="205" alt="product" />
                </a>
                <div className={cls.btnIconGroup}>
                    <a href="#" className={cls.btnIcon}>
                        <i className="fa-regular fa-bag-shopping"></i>
                    </a>
                    <button className={cls.btnIcon} data-toggle="modal"
                        data-target="#addCartModal">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
                <button className={cls.btnQuickview} title="Quick View" onClick={() => setOpenQuickView(true)}>Quick
                    View
                </button>
            </figure>
            <div className={cls.productDetails}>
                <div className={cls.categoryList}>
                    <a href="demo1-shop.html" className={cls.productCategory}>category</a>
                </div>
                <h3 className={cls.productTitle}> <a href="demo1-product.html">Black Grey Headset</a> </h3>
                <div className={cls.productRatings}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
                <div className={cls.priceBox}>
                    <span className={cls.oldPrice}>$59.00</span>
                    <span className={cls.productPrice}>$9.00</span>
                </div>
            </div>
            {openQuickView && 
                <QuickView setOpenQuickView={setOpenQuickView} />
            }
        </div>
    )
}

export default ProductEight