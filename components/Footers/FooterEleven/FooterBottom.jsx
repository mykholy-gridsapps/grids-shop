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
        <>
            <div className={cls.footerBottom}>
                <Grid container alignItems="center">
                    <Grid item xs='auto'>
                        <h6>
                            <b>ACCEPTED PAYMENT METHODS:</b>
                        </h6>
                    </Grid>
                    <Grid item xs>
                        <img src={imgs[0]} alt="" />
                        <img src={imgs[1]} alt="" />
                        <img src={imgs[2]} alt="" />
                        <img src={imgs[3]} alt="" />
                    </Grid>
                </Grid>

            </div>
            <div className={cls.footerBottom}>
                <Grid container alignItems="center">
                    <Grid item xs='auto'>
                        <h6>
                            <b>HOT SEARCHED KEYWORDS:</b>
                        </h6>
                    </Grid>
                    <Grid item xs>
                        <span>
                            <Link href="#" >
                                Xiaomi Mi3
                            </Link>
                        </span>
                        <span>
                            <Link href="#" >
                                Xiaomi Mi3
                            </Link>
                        </span>
                        <span>
                            <Link href="#" >
                                Xiaomi Mi3
                            </Link>
                        </span>
                        <span>
                            <Link href="#" >
                                Xiaomi Mi3
                            </Link>
                        </span>
                        <span>
                            <Link href="#" >
                                Xiaomi Mi3
                            </Link>
                        </span>
                        <span>
                            <Link href="#" >
                                Xiaomi Mi3
                            </Link>
                        </span>
                    </Grid>
                </Grid>
            </div>
            <div className={`${cls.footerBottom} ${cls.copyrights}`}>
                <p>

                    <span>
                        <Link href="#" >
                            Xiaomi Mi3
                        </Link>
                    </span>
                    <span>
                        <Link href="#" >
                            Xiaomi Mi3
                        </Link>
                    </span>
                    <span>
                        <Link href="#" >
                            Xiaomi Mi3
                        </Link>
                    </span>
                    <span>
                        <Link href="#" >
                            Xiaomi Mi3
                        </Link>
                    </span>
                    <span>
                        <Link href="#" >
                            Xiaomi Mi3
                        </Link>
                    </span>
                    <span>
                        <Link href="#" >
                            Xiaomi Mi3
                        </Link>
                    </span>
                </p>
                <p>
                    <span>
                        <Link href="#" >
                            Xiaomi Mi3
                        </Link>
                    </span>
                    ,
                    <span>
                        <Link href="#" >
                            Xiaomi Mi3
                        </Link>
                    </span>
                    ,
                    <span>
                        <Link href="#" >
                            Xiaomi Mi3
                        </Link>
                    </span>
                    ,
                    <span>
                        <Link href="#" >
                            Xiaomi Mi3
                        </Link>
                    </span>
                    ,
                    <span>
                        <Link href="#" >
                            Xiaomi Mi3
                        </Link>
                    </span>
                    ,
                    <span>
                        <Link href="#" >
                            Xiaomi Mi3
                        </Link>
                    </span>

                </p>
                <p>
                    Copyrights © KuteShop. All Rights Reserved. Designed by KuteThemes.com
                </p>

            </div>
        </>
    )
}

export default FooterBottom