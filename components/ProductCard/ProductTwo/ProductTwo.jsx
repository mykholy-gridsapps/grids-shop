// NEXT STUFF
import { useState } from 'react';
// COMPONENTS
import QuickView from '../QuickView/QuickView';
// STYLES FILES
import cls from './productTwo.module.scss';

const ProductTwo = () => {
    const [openQuickView, setOpenQuickView] = useState(false);

    return (
        <div className={[cls.productDefault, cls.innerQuickview, cls.innerIcon].join(' ')}>
            <figure className={cls.imgEffect}>
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
                <div className={cls.btnIconGroup}>
                    <a href="demo1-product.html" className={cls.btnIcon}>
                        <i className="fa-regular fa-bag-shopping"></i>
                    </a>
                </div>
                <button className={cls.btnQuickview} title="Quick View" onClick={() => setOpenQuickView(true)}>Quick
                    View</button>
            </figure>
            <div className={cls.productDetails}>
                <div className={cls.categoryWrap}>
                    <div className={cls.categoryList}>
                        <a href="demo1-shop.html" className="product-category">category</a>
                    </div>
                    <a href="wishlist.html" title="Add to Wishlist" className={cls.btnIconWish}>
                        <i className={cls.iconHeart}></i>
                    </a>
                </div>
                <h3 className={cls.productTitle}> <a href="demo1-product.html">Black Grey Headset</a> </h3>
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
            </div>
            {openQuickView && 
                <QuickView setOpenQuickView={setOpenQuickView} />
            }
        </div>
    )
}

export default ProductTwo