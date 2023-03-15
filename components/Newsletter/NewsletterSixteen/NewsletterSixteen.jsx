import { Grid } from "@mui/material";
import React from "react";
import cls from "./newsletterSixteen.module.scss";


const NewsletterSixteen = () => {
    return (
        <div className={cls.newsletterBanner}>
            <div className={cls.bannerContent}>

                <h2>SIGN UP BELOW FOR EARLY UPDATES</h2>
                <h5>You a Client , large or small, and want to participate in this adventure, please send us an email to support@kuteshop.com</h5>
                <div>
                    <form>
                        <input type="email" className="form-control mb-1" placeholder="Email address" required />
                        <button className="btn btn-primary"><i className="fa-regular fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewsletterSixteen