import Link from "next/link";
import React from "react";
import cls from './categorySixteen.module.scss'

const CategorySixteen = () => {
    return (
        <div className={cls.category}>
            <h6 className={cls.categoryTitle}>
                <Link href="#">Hair Care</Link>
                <i className="fa-regular fa-angle-right"></i>
            </h6>
            <div className={cls.categoryImage}>
                <Link href="#">
                    <img src="./imgs/category/category-16.jpg" />
                </Link>
            </div>
            <div className={cls.categoriesList}>
                <ul>
                    <li>
                        <i className="fa-regular fa-angle-right"></i>
                        <Link href="#">Conditioners</Link>
                    </li>
                    <li>
                        <i className="fa-regular fa-angle-right"></i>
                        <Link href="#">Hair Oils</Link>
                    </li>
                    <li>
                        <i className="fa-regular fa-angle-right"></i>
                        <Link href="#">Hair Treatments</Link>
                    </li>
                    <li>
                        <i className="fa-regular fa-angle-right"></i>
                        <Link href="#">Shampoos</Link>
                    </li>
                    <li >
                        <i className="fa-regular fa-angle-right"></i>
                        <Link className={cls.showAll} href="#">Show All</Link>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default CategorySixteen;