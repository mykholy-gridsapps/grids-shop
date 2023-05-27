import React from "react"

import Container from '@mui/material/Container';

import cls from "./footerBottom.module.scss"

const FooterBottom = () => {
    const imgs = [
        "/imgs/payments/payment-visa.svg",
        "./imgs/payments/payment-paypal.svg",
        "./imgs/payments/payment-stripe.png",
        "./imgs/payments/payment-verisign.svg"
    ]

    return (
        <>
            <div className={cls.newsletter}>
                <Container maxWidth="xxl" className={cls.wrapper}>
                    <div className={cls.data}>
                        <i class="fa-duotone fa-envelope-open-text"></i>
                        <div>
                            <h6>Join Our Newsletteer Now</h6>
                            <p>Be the First to Know. Sign up to newsletter today</p>
                        </div>
                    </div>
                    <div className={cls.input}>
                        <input type="text" placeholder="Your email address" />
                        <button>SIGNUP</button>
                    </div>
                </Container>
            </div>
            <div className={cls.footerBottom}>
                <Container maxWidth="xxl" className={cls.wrapper}>
                    <div className={cls.footerLeft}>
                        <span className={cls.footerCopyright}>© Porto eCommerce. 2021. All Rights Reserved</span>
                    </div>

                    <div className={cls.footerRight}>
                        <div className={cls.paymentIcons}>
                            <span className={cls.paymentIcon} style={{ backgroundImage: `url(${imgs[0]})` }}></span>
                            <span className={cls.paymentIcon} style={{ backgroundImage: `url(${imgs[1]})` }}></span>
                            <span className={cls.paymentIcon} style={{ backgroundImage: `url(${imgs[2]})` }}></span>
                            <span className={cls.paymentIcon} style={{ backgroundImage: `url(${imgs[3]})` }}></span>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default FooterBottom