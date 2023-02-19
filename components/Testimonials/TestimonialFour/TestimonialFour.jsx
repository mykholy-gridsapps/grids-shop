import React from "react";
import cls from './testimonialFour.module.scss';

const TestimonialFour = () => {
    return (
        <div className={cls.testimonial}>

            <blockquote>
                <p>
                    I really love it. At first it does feel strange and a little sore after! But
                    keep it up (I use morning and night) and my skin feels great.
                </p>
            </blockquote>

            <h5 className="testi-author">- Joe Doe</h5>

        </div>
    )
}

export default TestimonialFour;