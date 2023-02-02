import React from "react";
import cls from "./saleFive.module.scss"

const SaleFive = () => {
    return (
        <div className={cls.banner}>
            <figure>
                <img src="./imgs/sale/sale-5-1.jpg" alt="banner" />
            </figure>

            <div className={cls.bannerLayer}>
                <h4>40<sup>%<small class="ls-0">OFF</small></sup></h4>
                <h5><del>$450</del>$270</h5>
                <h4>Watches</h4>
                <h3>Mega Sale</h3>
            </div>
        </div>
    )
}
export default SaleFive; 