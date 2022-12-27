import React from "react";
import cls from "./newsletterTwo.module.scss";


const NewsletterTwo = () => {
    return (
        <div className={cls.newsletterBanner}>
            <h3 class="widget-title text-uppercase">Subscribe Newsletter</h3>
            <p class="mb-2">Get all the latest information on Events, Sales and Offers. </p>
            <form action="#">
                <div className={cls.formGroup}>
                    <i class="fa-regular fa-envelope-open-text"></i>
                    <input type="email" class="form-control" name="newsletter-email" placeholder="Email address" />
                </div>
                <input type="submit" className={cls.btn} value="Subscribe" />
            </form>
        </div>
    )
}

export default NewsletterTwo