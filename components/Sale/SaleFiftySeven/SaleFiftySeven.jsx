import Link from "next/link";
import React from "react";
import cls from "./saleFiftySeven.module.scss"

const SaleFiftySeven = ({height}) => {
    return (
        <div className={cls.banner} style={{height: height}}>
            <figure >
                <img src="./imgs/sale/sale-57-1.jpg" alt="banner" />
            </figure>

            <h6 className={cls.labelLeft}>50<small><sup>%</sup><sub>OFF</sub></small></h6>
            <h6 className={cls.labelRight}>70<small><sup>%</sup><sub>OFF</sub></small></h6>
            <h6 className={cls.labelBottom}>30<small><sup>%</sup><sub>OFF</sub></small></h6>
            <div className={cls.bannerLayer}>
                <h3>DEAL PROMOS</h3>
                <h4>STARTING AT $99</h4>
                <Link href="#">SHOP NOW</Link>
            </div>
        </div>
    )
}
export default SaleFiftySeven; 