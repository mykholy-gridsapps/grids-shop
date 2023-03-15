import Link from "next/link";
import React from "react";
import cls from './categorySeventeen.module.scss'

const CategorySeventeen = () => {
    return (
        <div className={cls.productCategory}>
            <Link href="#">
                <div className={cls.categoryImage}>
                    <img src="./imgs/category/category-17.jpg" />
                </div>
                <div className={cls.categoryContent}>
                    <h3>Folding Chairs</h3>
                    <span className={cls.categoryItems}>3 Items</span>
                </div>
            </Link>
        </div>
    )
}

export default CategorySeventeen;