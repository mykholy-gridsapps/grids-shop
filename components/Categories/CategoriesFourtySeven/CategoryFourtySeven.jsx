import Link from "next/link";
import React from "react";
import cls from './categoryFourtySeven.module.scss'

const CategoryFourtySeven = () => {
    return (
        <div className={cls.category}>
            <Link href="#">
                <figure>
                    <img src="imgs/category/category-20.jpg" alt="category" />
                </figure>
                <div className={cls.categoryContent}>
                    <h3>Fashion</h3>
                </div>
            </Link>
        </div>
    )
}

export default CategoryFourtySeven;