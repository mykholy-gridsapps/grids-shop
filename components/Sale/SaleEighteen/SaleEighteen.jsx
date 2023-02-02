import React from "react";
import cls from "./saleEighteen.module.scss"

const SaleEighteen = () => {
    return (
        <div className={cls.banner}>
            <img src="./imgs/sale/sale-18-1.jpg" />
            <div className={cls.bannerLayer}>
                <h5 class="m-b-1">
                    <a href="demo14-shop.html">Save Up To</a>
                </h5>
                <h4 class="text-white m-b-1">$100</h4>
                <h6 class="text-white mb-0">on Porto Watch Series 5</h6>
            </div>
        </div>
    )
}
export default SaleEighteen; 