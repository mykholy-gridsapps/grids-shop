import React from "react";
import cls from './testimonialThree.module.scss';

const TestimonialThree = () => {
    return (
        <div className={cls.testimonial}>
            <div className={cls.testimonialOwner}>
                <figure>
                    <img src="./imgs/clients/client.jpg" alt="client" />
                </figure>

                <div className={cls.content}>
                    <blockquote class="ml-3 pr-0">
                        <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing dolor sit
                            amet,
                            consectetur elitad adipiscin.
                        </p>
                    </blockquote>

                    <h5 class="testi-author">by Joe Doe</h5>
                    <div className={cls.ratings}>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialThree;