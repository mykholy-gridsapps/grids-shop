import Link from "next/link";
import React from "react";
import cls from './testimonialSix.module.scss';

const TestimonalSix = () => {
    return (
        <div className={cls.testimonial}>
            <blockquote className="ml-4 pr-0">
                <p>Great theme! Very intuitive,
                    clean code, very well-organized
                    documentation – I would highly
                    recommend getting this theme;
                    it’s ideal for further
                    customization!</p>
            </blockquote>
            <div className={cls.testimonialOwner}>
                <div>
                    <div className={cls.testimonialTitle}>
                        <Link href="#">Harry
                            Jones</Link>,Web Designer<br />
                        <span>
                            CreativeBrains </span>
                    </div>
                </div>
                <figure>
                    <img src="./imgs/clients/client.jpg" alt="client" />
                </figure>

            </div>

        </div>
    )
}

export default TestimonalSix;