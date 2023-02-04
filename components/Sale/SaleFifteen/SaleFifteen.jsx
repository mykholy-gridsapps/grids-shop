import { Grid } from "@mui/material";
import React from "react";
import cls from "./saleFifteen.module.scss"

const SaleFifteen = () => {
    return (
        <div className={cls.banner}>
            <div className="banner">
                <img src="./imgs/sale/sale-15-1.jpg" alt="desc" width="1000" height="400" />

                    <div className={cls.bannerLayer}>
                        <h4>Sunglasses, Bags, Dresses and much more...</h4>
                        <h3>
                            <b className="text-white position-relative">BIG SALE</b> ALL NEW FASHION BRANDS ITEMS UP TO 70% OFF
                        </h3>
                        <a href="demo10-shop.html" className={cls.btn} role="button">Shop Now<i className="fas fa-chevron-right"></i></a>
                    </div>
            </div>
        </div>
    )
}
export default SaleFifteen; 