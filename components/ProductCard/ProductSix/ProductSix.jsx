import React, { useState } from 'react'
import { i18n, useTranslation } from 'next-i18next'

import cls from './productSix.module.scss'
import Link from 'next/link'
import { Rating } from '@mui/material'

const ProductSix = () => {
    const [quantity, setQuantity] = useState(1);
    const [openQuickView, setOpenQuickView] = useState(false);

    const changeQuantity = (type, value) => {
        if (type === 'plus') setQuantity(prev => (prev += 1))
        else {
            if (quantity > 1) {
                setQuantity(prev => (prev -= 1))
            }
        }
    }
    return (
        <div className={`${cls.productDefault} ${cls.innerQuickview} ${cls.innerIcon} ${cls[i18n.language]}`}>
            <figure className={cls.imgEffect}>
                <Link href="demo1-product.html">
                    <img src="./imgs/product-1.jpg" width="205" height="205"
                        alt="product" />
                    <img src="./imgs/product-1-2.jpg" width="205" height="205"
                        alt="product" />
                </Link>
                <div className={cls.labelGroup}>
                    <div className={[cls.productLabel, cls.labelHot].join(' ')}>HOT</div>
                    <div className={[cls.productLabel, cls.labelSale].join(' ')}>-20%</div>
                </div>
                <div className={cls.btnIconGroup}>
                    <Link href="wishlist.html" title="Add to Wishlist" className={cls.btnIconWish}>
                        <i className={cls.iconHeart}></i>
                    </Link>
                </div>
                <Link href="ajax/product-quick-view.html" className={cls.btnQuickview} title="Quick View">Quick View</Link>
            </figure>
            <div className={cls.productDetails}>
                <div className={cls.categoryList}>
                    <Link href="category.html">Category</Link>
                </div>
                <h3 className={cls.productTitle}>
                    <Link href="product.html">Men Black Gentle Belt</Link>
                </h3>
                <div className={cls.ratingsContainer}>
                <Rating name="read-only" value={3} readOnly />

                </div>
                <div className={cls.priceBox}>
                    <span className={cls.oldPrice}>$59.00</span>
                    <span className={cls.productPrice}>$9.00</span>
                </div>
                <div className="product-action">
                    <div className={cls.productSingleQty}>
                        <div className={cls.inputGroup}>
                            <span className={cls.inputGroupAppend}>
                                <button onClick={() => changeQuantity('minus')} type="button"><i className="fa-light fa-minus"></i></button>
                            </span>
                            <input type="text" value={quantity} />
                            <span className={cls.inputGroupPrepend}>
                                <button onClick={() => changeQuantity('plus')} type="button"><i className="fa-light fa-plus"></i></button>
                            </span>
                        </div>
                    </div>
                    <Link href="demo14-product.html" className={cls.btnAddCart}>
                        <i className="icon-shopping-cart"></i>ADD TO CART</Link>
                </div>
            </div>
            {openQuickView && 
                <QuickView setOpenQuickView={setOpenQuickView} />
            }
        </div>
    )
}

export default ProductSix