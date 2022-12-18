import React from 'react'
import cls from './productEight.module.scss'

const ProductEight = () => {
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
                        <i class="fa-regular fa-bag-shopping"></i>
                    </a>
                    <button className={cls.btnIcon} data-toggle="modal"
                        data-target="#addCartModal">
                        <i class="fa-regular fa-heart"></i>
                    </button>
                </div>
                <a href="ajax/product-quick-view.html" className={cls.btnQuickview} title="Quick View">Quick
                    View
                </a>
            </figure>
            <div className={cls.productDetails}>
                <div className={cls.categoryList}>
                    <a href="demo1-shop.html" className={cls.productCategory}>category</a>
                </div>
                <h3 className={cls.productTitle}> <a href="demo1-product.html">Black Grey Headset</a> </h3>
                <div className={cls.productRatings}>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <div className={cls.priceBox}>
                    <span className={cls.oldPrice}>$59.00</span>
                    <span className={cls.productPrice}>$9.00</span>
                </div>
            </div>
        </div>
    )
}

export default ProductEight