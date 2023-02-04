import React from "react";
import cls from './testimonialOne.module.scss';

const TestimonalOne = () => {
    return (
        <div className={cls.testimonial}>
            <div className={cls.testimonialOwner}>
                <figure>
                    <img src="./imgs/clients/client.jpg" alt="client" />
                </figure>

                <div>
                    <h4 className={cls.testimonialTitle}>john Smith</h4>
                    <span>CEO &amp; Founder</span>
                </div>
            </div>

            <blockquote className="ml-4 pr-0">
                <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi.
                </p>
            </blockquote>
        </div>
    )
}

export default TestimonalOne;