import React from "react";
import cls from './testimonialFive.module.scss';

const TestimonialFive = () => {
    return (
        <div className={cls.testimonial}>

            <blockquote>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor tempus rhoncus. Sed et magna quis nisi iaculis consectetur. Nullam molestie sed dui at volutpat. Morbi porta malesuada tortor, eu hendrerit lectus.
                </p>
            </blockquote>
            
            <figure>
                <img src="./imgs/clients/client.jpg" alt="client" />
            </figure>

            <h5 class="testi-author">Joe Doe</h5>
            <div className={cls.ratings}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>

        </div>
    )
}

export default TestimonialFive;