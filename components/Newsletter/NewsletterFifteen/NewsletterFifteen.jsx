import { Grid } from "@mui/material";
import React from "react";
import cls from "./newsletterFifteen.module.scss";


const NewsletterFifteen = () => {
    return (
        <div className={cls.newsletterBanner}>
            <div className={cls.bannerContent}>

                <h2>subscribe to our newsletter</h2>
                <h5>Get all the latest information on Events, Sales and Offers.</h5>
                <div>
                    <form>
                        <i className="fa-regular fa-envelope"></i>
                        <input type="email" className="form-control mb-1" placeholder="Email address" required />
                        <button className="btn btn-primary">OK</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewsletterFifteen