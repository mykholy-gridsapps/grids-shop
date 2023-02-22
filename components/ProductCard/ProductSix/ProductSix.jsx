// NEXT STUFF
import { useState } from 'react';
// COMPONENTS
import QuickView from '../QuickView/QuickView';

import cls from './productSix.module.scss'

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
        <div className={[cls.productDefault, cls.innerQuickview, cls.innerIcon].join(' ')}>
            <figure className={cls.imgEffect}>
                <a href="demo1-product.html">
                    <img src="./imgs/product-1.jpg" width="205" height="205"
                        alt="product" />
                    <img src="./imgs/product-1-2.jpg" width="205" height="205"
                        alt="product" />
                </a>
                <div className={cls.labelGroup}>
                    <div className={[cls.productLabel, cls.labelHot].join(' ')}>HOT</div>
                    <div className={[cls.productLabel, cls.labelSale].join(' ')}>-20%</div>
                </div>
                <div className={cls.btnIconGroup}>
                    <a href="wishlist.html" title="Add to Wishlist" className={cls.btnIconWish}>
                        <i className={cls.iconHeart}></i>
                    </a>
                </div>
                <button className={cls.btnQuickview} title="Quick View" onClick={() => setOpenQuickView(true)}>Quick View</button>
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
                    <a href="demo14-product.html" className={cls.btnAddCart}>
                        <i className="icon-shopping-cart"></i>ADD TO CART</a>
                </div>
            </div>
            {openQuickView && 
                <QuickView setOpenQuickView={setOpenQuickView} />
            }
        </div>
    )
}

export default ProductSix