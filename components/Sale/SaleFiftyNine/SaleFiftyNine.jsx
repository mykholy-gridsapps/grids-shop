import Link from "next/link";
import React from "react";
import cls from "./saleFiftyNine.module.scss"

const SaleFiftyNine = () => {
    return (
        <div className={cls.banner}>
            <figure>
                <img src="./imgs/sale/sale-59-1.jpg" alt="banner" />
            </figure>
            <div className={cls.bannerLayer}>
                <h3 className="m-b-2">Leather Jackets</h3>
                <h5><i>UP TO</i><b>$100</b><sub>OFF</sub></h5>
                <Link href="#">Get Yours!</Link>
            </div>
        </div>
    )
}
export default SaleFiftyNine; 