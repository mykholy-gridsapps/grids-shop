import Link from "next/link";
import React from "react";

import cls from "./categoriesSideOne.module.scss";


const CategoriesSideOne = () => {
    return (
        <div className={cls.wrapper}>
            <h2 className={cls.title}>Top Categories</h2>

            <div className={cls.body}>
                <ul className={cls.sideMenu}>
                    <li><Link href="demo2-shop.html"><i class="far fa-tshirt"></i>Fashion</Link></li>
                    <li><Link href="demo2-shop.html"><i class="far fa-tachometer-alt-slow"></i>Electronics</Link></li>
                    <li><Link href="demo2-shop.html"><i class="far fa-gift"></i>Gifts</Link></li>
                    <li><Link href="demo2-shop.html"><i class="far fa-flower-tulip"></i>Home &amp;
                        Garden</Link></li>
                    <li><Link href="demo2-shop.html"><i class="far fa-microphone-alt"></i>Music</Link></li>
                    <li><Link href="demo2-shop.html"><i class="far fa-racquet"></i>Sports</Link></li>
                </ul>

                <Link href="#" className={cls.btn}>Huge Sale -
                    <strong>70%</strong>
                    Off</Link>
            </div>
        </div>
    )
}

export default CategoriesSideOne