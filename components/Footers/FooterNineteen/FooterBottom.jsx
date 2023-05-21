import { Grid } from "@mui/material"
import Link from "next/link"
import React from "react"
import cls from "./footerBottom.module.scss"

const FooterBottom = () => {
    const imgs = [
        "/imgs/payments/payment-visa.svg",
        "./imgs/payments/payment-paypal.svg",
        "./imgs/payments/payment-stripe.png",
        "./imgs/payments/payment-verisign.svg"
    ]

    return (
        <div className={cls.footerBottom}>
            <div className={cls.footerLeft}>
                <span className={cls.footerCopyright}>© Porto eCommerce. 2021. All Rights Reserved</span>
            </div>
        </div>
    )
}

export default FooterBottom