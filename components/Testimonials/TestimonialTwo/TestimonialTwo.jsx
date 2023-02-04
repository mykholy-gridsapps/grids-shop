import React from "react";
import cls from './testimonialTwo.module.scss';

const TestimonialTwo = () => {
    return (
        <div className={cls.testimonial}>
            <div className={cls.testimonialOwner}>
                <figure>
                    <img src="./imgs/clients/client.jpg" alt="client" width="96"
                        height="96" />
                </figure>

                <div className={cls.content}>
                    <div className={cls.ratings}>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <h4>Fashion High Hill</h4>

                    <blockquote className="ml-3 pr-0">
                        <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing dolor sit
                            amet,
                            consectetur elitad adipiscin.
                        </p>
                    </blockquote>

                    <h5 className="testi-author">by Joe Doe</h5>
                </div>
            </div>
        </div>
    )
}

export default TestimonialTwo;