/* eslint-disable @next/next/no-img-element */
// NEXT STUFF
import { useState } from 'react';
// COMPONENTS
import QuickView from '../QuickView/QuickView';

import cls from './productFive.module.scss'

const ProductFive = () => {
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
                <div className={cls.labelGroup}>
                    <div className={[cls.productLabel, cls.labelHot].join(' ')}>HOT</div>
                    <div className={[cls.productLabel, cls.labelSale].join(' ')}>-20%</div>
                </div>
            </figure>
            <div className={cls.productDetails}>
                <div className={cls.categoryList}>
                    <a href="category.html">Category</a>
                </div>
                <h3 className={cls.productTitle}>
                    <a href="product.html">Men Black Gentle Belt</a>
                </h3>
                <div className={cls.ratingsContainer}>
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
                <div className={cls.productAction}>
                    <a href="wishlist.html" className={cls.btnIconWish} title="wishlist"><i className={cls.iconHeart}></i></a>
                    <a href="#" className={cls.btnAddCart}><i
                        className="icon-shopping-cart"></i><span>ADD TO CART</span></a>
                    <button className={cls.btnQuickview} title="Quick View" onClick={() => setOpenQuickView(true)}>
                        <i className="fas fa-external-link-alt"></i></button>
                </div>
            </div>
            {openQuickView && 
                <QuickView setOpenQuickView={setOpenQuickView} />
            }
        </div>
    )
}

export default ProductFive