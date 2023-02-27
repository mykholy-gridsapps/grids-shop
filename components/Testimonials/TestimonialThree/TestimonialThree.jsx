import { Rating } from "@mui/material";
import { i18n, useTranslation } from "next-i18next";
import React from "react";

import cls from './testimonialThree.module.scss';

const TestimonialThree = () => {
    const { t, i18n } = useTranslation("common");
    return (
        <div className={`${cls.testimonial} ${cls[i18n.language]}`}>
            <div className={cls.testimonialOwner}>
                <figure>
                    <img src="./imgs/clients/client.jpg" alt="client" />
                </figure>

                <div className={cls.content}>
                    <blockquote className="ml-3 pr-0">
                        <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing dolor sit
                            amet,
                            consectetur elitad adipiscin.
                        </p>
                    </blockquote>

                    <h5 className="testi-author">by Joe Doe</h5>
                    <div className={cls.ratings}>
                    <Rating name="read-only" value={3} readOnly />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialThree;