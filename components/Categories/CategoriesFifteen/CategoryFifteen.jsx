import Link from "next/link";
import React from "react";
import cls from './categoryFifteen.module.scss'

const CategoryFifteen = () => {
    return (
        <div className={cls.category}>
            <div className={cls.topCategory}>
                <Link href="#" className={cls.thumb}>
                    <img src="./imgs/category/category-15.webp" />
                </Link>
                <h3 className="title">Electronics</h3>
                <Link href="#" className={cls.button}>
                    SHOP NOW
                </Link>
            </div>
            <ul>
                <li>
                    <Link href="#">Batteries</Link>
                </li>
                <li>
                    <Link href="#">Headphone, Headset</Link>
                </li>
                <li>
                    <Link href="#">Home Audio</Link>
                </li>
                <li>
                    <Link href="#">Lights &amp; Lamps</Link>
                </li>
            </ul>
        </div >
    )
}

export default CategoryFifteen;